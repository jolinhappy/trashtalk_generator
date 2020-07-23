function trashTalkGenerator(selectedJob) {
  //基本資料
  const job = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  //讓task和phrase被隨機選取的index



  //沒選擇和職業的情況
  if (selectedJob === undefined) {
    return '請先選擇一個職業！'
  } else {
    //排除沒選職業的情況
    const taskIndex = Math.floor(Math.random() * task[selectedJob].length)
    const phraseIndex = Math.floor(Math.random() * phrase.length)
    return `身為一位${job[selectedJob]}，${task[selectedJob][taskIndex]}，${phrase[phraseIndex]}吧！`
  }
}

module.exports = trashTalkGenerator