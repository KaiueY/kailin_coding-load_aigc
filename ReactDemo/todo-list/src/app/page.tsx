"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusIcon, TrashIcon, Trash2Icon, UndoIcon, ChevronDownIcon, ChevronRightIcon } from "lucide-react"
import Cookies from 'js-cookie'

interface Todo {
  id: number
  text: string
  completed: boolean
  startTime: string
  completionTime?: string
  plannedCompletionTime: string
}

interface GroupedTodos {
  [year: string]: {
    [month: string]: {
      [day: string]: Todo[]
    }
  }
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [trashTodos, setTrashTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState("")
  const [plannedCompletionTime, setPlannedCompletionTime] = useState("")
  const [selectedTrashItems, setSelectedTrashItems] = useState<number[]>([])
  const [activeTab, setActiveTab] = useState("active")
  const [expandedGroups, setExpandedGroups] = useState<{[key: string]: boolean}>({})

  // 从cookie加载数据
  useEffect(() => {
    const savedTodos = Cookies.get('todos')
    const savedTrashTodos = Cookies.get('trashTodos')
    if (savedTodos) setTodos(JSON.parse(savedTodos))
    if (savedTrashTodos) setTrashTodos(JSON.parse(savedTrashTodos))
  }, [])

  // 保存数据到cookie
  const saveToCookie = (key: string, value: any) => {
    Cookies.set(key, JSON.stringify(value), { expires: 365 })
  }

  const addTodo = () => {
    if (newTodo.trim() !== "" && plannedCompletionTime !== "") {
      const newTodoItem: Todo = {
        id: Date.now(),
        text: newTodo,
        completed: false,
        startTime: new Date().toISOString(),
        plannedCompletionTime: plannedCompletionTime,
      }
      const updatedTodos = [...todos, newTodoItem]
      setTodos(updatedTodos)
      saveToCookie('todos', updatedTodos)
      setNewTodo("")
      setPlannedCompletionTime("")
    }
  }

  const deleteTodo = (id: number) => {
    const todoToDelete = todos.find(todo => todo.id === id)
    if (todoToDelete) {
      const updatedTodos = todos.filter(todo => todo.id !== id)
      const updatedTrashTodos = [...trashTodos, todoToDelete]
      setTodos(updatedTodos)
      setTrashTodos(updatedTrashTodos)
      saveToCookie('todos', updatedTodos)
      saveToCookie('trashTodos', updatedTrashTodos)
    }
  }

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            completed: !todo.completed,
            completionTime: todo.completed ? undefined : new Date().toISOString(),
          }
        : todo
    )
    setTodos(updatedTodos)
    saveToCookie('todos', updatedTodos)
  }

  const restoreFromTrash = (id: number) => {
    const todoToRestore = trashTodos.find(todo => todo.id === id)
    if (todoToRestore) {
      const updatedTrashTodos = trashTodos.filter(todo => todo.id !== id)
      const updatedTodos = [...todos, todoToRestore]
      setTrashTodos(updatedTrashTodos)
      setTodos(updatedTodos)
      saveToCookie('trashTodos', updatedTrashTodos)
      saveToCookie('todos', updatedTodos)
    }
  }

  const permanentlyDeleteTodo = (id: number) => {
    const updatedTrashTodos = trashTodos.filter(todo => todo.id !== id)
    setTrashTodos(updatedTrashTodos)
    saveToCookie('trashTodos', updatedTrashTodos)
  }

  const toggleTrashItemSelection = (id: number) => {
    setSelectedTrashItems(prevSelected =>
      prevSelected.includes(id)
        ? prevSelected.filter(itemId => itemId !== id)
        : [...prevSelected, id]
    )
  }

  const permanentlyDeleteSelected = () => {
    const updatedTrashTodos = trashTodos.filter(todo => !selectedTrashItems.includes(todo.id))
    setTrashTodos(updatedTrashTodos)
    setSelectedTrashItems([])
    saveToCookie('trashTodos', updatedTrashTodos)
  }

  const permanentlyDeleteAllTrash = () => {
    setTrashTodos([])
    setSelectedTrashItems([])
    saveToCookie('trashTodos', [])
  }

  const toggleGroup = (groupKey: string) => {
    setExpandedGroups(prev => ({
      ...prev,
      [groupKey]: !prev[groupKey]
    }))
  }

  const groupCompletedTodos = (completedTodos: Todo[]): GroupedTodos => {
    return completedTodos.reduce((acc: GroupedTodos, todo) => {
      if (todo.completionTime) {
        const date = new Date(todo.completionTime)
        const year = date.getFullYear().toString()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')

        if (!acc[year]) acc[year] = {}
        if (!acc[year][month]) acc[year][month] = {}
        if (!acc[year][month][day]) acc[year][month][day] = []

        acc[year][month][day].push(todo)
      }
      return acc
    }, {})
  }

  const renderGroupedTodos = (groupedTodos: GroupedTodos) => {
    return Object.entries(groupedTodos).map(([year, months]) => (
      <div key={year} className="mb-4">
        <Button
          variant="ghost"
          onClick={() => toggleGroup(year)}
          className="w-full justify-start p-2 text-left font-semibold"
        >
          {expandedGroups[year] ? <ChevronDownIcon className="mr-2" /> : <ChevronRightIcon className="mr-2" />}
          {year}
        </Button>
        {expandedGroups[year] && (
          <div className="ml-4">
            {Object.entries(months).map(([month, days]) => (
              <div key={`${year}-${month}`} className="mb-2">
                <Button
                  variant="ghost"
                  onClick={() => toggleGroup(`${year}-${month}`)}
                  className="w-full justify-start p-2 text-left font-medium"
                >
                  {expandedGroups[`${year}-${month}`] ? <ChevronDownIcon className="mr-2" /> : <ChevronRightIcon className="mr-2" />}
                  {new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'long' })}
                </Button>
                {expandedGroups[`${year}-${month}`] && (
                  <div className="ml-4">
                    {Object.entries(days).map(([day, todos]) => (
                      <div key={`${year}-${month}-${day}`} className="mb-2">
                        <Button
                          variant="ghost"
                          onClick={() => toggleGroup(`${year}-${month}-${day}`)}
                          className="w-full justify-start p-2 text-left"
                        >
                          {expandedGroups[`${year}-${month}-${day}`] ? <ChevronDownIcon className="mr-2" /> : <ChevronRightIcon className="mr-2" />}
                          {new Date(parseInt(year), parseInt(month) - 1, parseInt(day)).toLocaleDateString()}
                        </Button>
                        {expandedGroups[`${year}-${month}-${day}`] && (
                          <div className="ml-4">
                            {todos.map((todo) => (
                              <div key={todo.id} className="flex items-center space-x-2 mb-2">
                                <Checkbox
                                  id={`todo-${todo.id}`}
                                  checked={todo.completed}
                                  onCheckedChange={() => toggleTodo(todo.id)}
                                  className="border-zinc-600"
                                />
                                <label
                                  htmlFor={`todo-${todo.id}`}
                                  className="flex-grow text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 line-through text-zinc-500"
                                >
                                  {todo.text}
                                </label>
                                <div className="text-xs text-zinc-600">
                                  Completed: {new Date(todo.completionTime!).toLocaleTimeString()}
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => deleteTodo(todo.id)}
                                  className="hover:bg-zinc-800"
                                >
                                  <TrashIcon className="h-4 w-4 text-zinc-400" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    ))
  }

  const activeTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)
  const groupedCompletedTodos = groupCompletedTodos(completedTodos)

  return (
    <div className="container mx-auto p-4 max-w-2xl bg-black min-h-screen text-white">
      <Card className="mb-6 bg-zinc-900 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-semibold text-white">Todo List</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setActiveTab(activeTab === "trash" ? "active" : "trash")}
            className="hover:bg-zinc-800"
          >
            {activeTab === "trash" ? (
              <UndoIcon className="h-5 w-5 text-zinc-400" />
            ) : (
              <TrashIcon className="h-5 w-5 text-zinc-400" />
            )}
          </Button>
        </CardHeader>
        <CardContent>
          {activeTab !== "trash" && (
            <div className="flex space-x-2 mb-4">
              <Input
                type="text"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className="flex-grow bg-zinc-800 text-white border-zinc-700"
              />
              <Input
                type="datetime-local"
                value={plannedCompletionTime}
                onChange={(e) => setPlannedCompletionTime(e.target.value)}
                className="w-48 bg-zinc-800 text-white border-zinc-700"
              />
              <Button onClick={addTodo} className="bg-blue-600 hover:bg-blue-700">
                <PlusIcon className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>
          )}
          <Tabs defaultValue={activeTab === "trash" ? "trash" : "active"} className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-zinc-800">
              <TabsTrigger value="active" className="data-[state=active]:bg-zinc-700">Active</TabsTrigger>
              <TabsTrigger value="completed" className="data-[state=active]:bg-zinc-700">Completed</TabsTrigger>
              <TabsTrigger value="trash" className="data-[state=active]:bg-zinc-700">Trash</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Active Todos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    {activeTodos.map((todo) => (
                      <div key={todo.id} className="flex items-center space-x-2 mb-2">
                        <Checkbox
                          id={`todo-${todo.id}`}
                          checked={todo.completed}
                          onCheckedChange={() => toggleTodo(todo.id)}
                          className="border-zinc-600"
                        />
                        <label
                          htmlFor={`todo-${todo.id}`}
                          className="flex-grow text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-300"
                        >
                          {todo.text}
                        </label>
                        <div className="text-xs text-zinc-500">
                          Due: {new Date(todo.plannedCompletionTime).toLocaleString()}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteTodo(todo.id)}
                          className="hover:bg-zinc-800"
                        >
                          <TrashIcon className="h-4 w-4 text-zinc-400" />
                        </Button>
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="completed">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white">Completed Todos</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    {renderGroupedTodos(groupedCompletedTodos)}
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="trash">
              <Card className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    <span>Trash</span>
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={permanentlyDeleteSelected}
                        disabled={selectedTrashItems.length === 0}
                        className="text-xs"
                      >
                        Delete Selected
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={permanentlyDeleteAllTrash}
                        disabled={trashTodos.length === 0}
                        className="text-xs"
                      >
                        Delete All
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[300px]">
                    {trashTodos.map((todo) => (
                      <div key={todo.id} className="flex items-center space-x-2 mb-2">
                        <Checkbox
                          id={`trash-${todo.id}`}
                          checked={selectedTrashItems.includes(todo.id)}
                          onCheckedChange={() => toggleTrashItemSelection(todo.id)}
                          className="border-zinc-600"
                        />
                        <label
                          htmlFor={`trash-${todo.id}`}
                          className="flex-grow text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-300"
                        >
                          {todo.text}
                        </label>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => restoreFromTrash(todo.id)}
                          className="hover:bg-zinc-800"
                        >
                          <UndoIcon className="h-4 w-4 text-zinc-400" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => permanentlyDeleteTodo(todo.id)}
                          className="hover:bg-zinc-800"
                        >
                          <Trash2Icon className="h-4 w-4 text-zinc-400" />
                        </Button>
                      </div>
                    ))}
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}