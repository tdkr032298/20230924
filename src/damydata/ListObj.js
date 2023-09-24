const listData = {
     items:
        [
        {
          ITMTPId: 0,                            //IT中計ID（IT Mid-term Manegement Plan）      number
          ITMTPsubId: 0,                         //IT中計サブID（IT Mid-term Manegement Plan）      number
          budgetId: 0,			//予算ID　　　number
    
          statusName:"",                     //絞込み　ステータス名称　  string
    
          itemStatus: "",                   //ステータス  string       
          name: "",                         //担当者名    string
          department: "",                   //部署        string
    
          title: "富士松SMISサーバーOSサポート終了に伴うサーバー更新",    //案件名     string
    
          invest: [100, 100, 100, 100, 100, 100],     //投資金額　初年度＋〇年分     number[]
          expenses: [100, 100, 100, 100, 100, 100],          //経費金額　初年度＋〇年分     number[]
          
          judgement: "",                    //一次判定    string? number? masterもちさせるなら、number
          finalJudgement: "",               //最終判定    string? number? masterもちさせるなら、number
          monthlyCost:"-",                  //月割り    string? number? masterもちさせるなら、number
    
        },
        ],
    
        header:
        {
          year: ["","","","","",""],	//年度        string[]
    
        },
    
       master:
        {
          userMaster:{
                      section:[],        //部門        string[]
                      division:[],       //部        　string[]
                      department:[],      //室      　  string[]
                      group:[],       　 //グループ    string[]
                      code:[],        　 //組          string[]
                    }
        
                },
    
        listButtonStatus:
          {
            approvalRequest:"",   　 //承認依頼        null || string
            decline:"",       　     //却下          　null || string
            listApproval:"",     　  //リスト承認      null || string
            judgementApproval:"",    //判定承認        null || string
            rejudgement:"",          //再審         　 null || string
            listCancel:"",           //解除      　    null || string
            judgementComplete:"",    //判定完了   　　  null || string
            confirm:"",              //確定            null || string
          },
    
          listButtonNextStatus:
          {
            approvalRequest:"",   　 //承認依頼        null || string
            decline:"",       　     //却下          　null || string
            listApproval:"",     　  //リスト承認      null || string
            judgementApproval:"",    //判定承認        null || string
            rejudgement:"",          //再審         　 null || string
            listCancel:"",           //解除      　    null || string
            judgementComplete:"",    //判定完了   　　  null || string
            confirm:"",              //確定            null || string
          },
      
        }

      export default listData;