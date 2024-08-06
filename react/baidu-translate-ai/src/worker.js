  import {
        pipeline, // pipe 模块 派出一个任务
        env,//环境

    } from 'https://cdn.jsdmirror.com/npm/@xenova/transformers@2.6.0'
    env.allowLocalModels = false

    /** 
     * @func 翻译nlp任务派发单例类
     * pipeline 非常消耗性能
     */
    class MyTranslatonPipeline{
        // 静态属性
        static task = 'translation'
        // 翻译模型
        static model ='Xenova/nllb-200-distilled-600M'
        // 单例
        static instance  = null
        static async getInstance(progress_callback=null){
            if(this.instance===null){
                console.log('--------------');
                
                this.instance = pipeline(this.task,this.model,{
                    progress_callback
                })
            }
            return this.instance
        }
    }
// 在这里不能做DOm操作
self.addEventListener('message',async(event) =>{
    console.log(event);
    // 单例
    let translator = await MyTranslatonPipeline.getInstance((x) => {
        console.log(x);
    })
    
    self.postMessage({
        text:'AI任务完成了'
    })
    
})