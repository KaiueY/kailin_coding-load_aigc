export default function Progress({ text, percentage}) {
    // 阮一峰es6手册 代码简洁
    percentage = percentage ?? 0;
    return (
        <div className="progress-container">
           <div className="progress-bar" style={{'width': `${percentage}`}}>
            {text} {`${percentage.toFixed(2)}%`}
           </div>
        </div>
    )
}