// 不能做DOM Window self = this 
import {
    pipeline, // pipe 模块， 派出一个任务
    env // 环境
    // 华为智驾
} from 'https://cdn.jsdmirror.com/npm/@xenova/transformers@2.6.0'
env.allowLocalModels = false;

// es6 class 封装  翻译pipeline 类
/**
 * @func  翻译nlp任务派发单例类
 * pipeline 非常耗性能 
 */
class MyTranslationPipeline {
    // 静态属性
    static task = 'translation'
    // 翻译模型
    static model = 'Xenova/nllb-200-distilled-600M'
    // 单例
    static instance = null
    static async getInstance(progress_callback=null) {
        if (this.instance === null) {
            console.log('-----------')
            this.instance = pipeline(this.task, this.model, {
                progress_callback
            })
        }
        return this.instance
    }
}

self.addEventListener('message', async (event) => {
    // 单例
    let translator = await  MyTranslationPipeline.getInstance((x) => {
        console.log(x);
        self.postMessage(x);
    })
    console.log(event)
    let output = await translator(event.data.text,{
        tgt_lang:event.data.tgt_lang,
        src_lang:event.data.src_lang,
        callback_function:(x) =>{
            self.postMessage({
                status:'update',
                output: translator.tokenizer.decode(x[0].output_token_ids, {
                    skip_special_tokens: true,
                  }),
            })
        }
    })
    self.postMessage({
        status:'completed',
        text: 'AI任务完成了'
    })
})