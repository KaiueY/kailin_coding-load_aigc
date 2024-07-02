const AppHeader = (props) => {
    const { name,theme  } = props
    return (
        <header className="app-header">
            <h1>欢迎来到{ name }{theme}</h1>
        </header>
    )
}
export default AppHeader