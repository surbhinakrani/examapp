let players = [
    {
        team: 'green',
        name: 'Bob',
        points: 5,
        isActive:true
    },
    {
        team: 'green',
        name: 'abhs',
        points: 10,
        isActive:true
    },
    { 
        team: 'blue',
        name: 'Bob',
        points: 5,
        isActive:true
    },
    {
        team: 'blue',
        name: 'Greav',
        points: 10,
        isActive:false
    },
    {
        team: 'blue',
        name: 'Greav',
        points: 10,
        isActive:true
    }
];

let teams=[],teamspoints=[];

players.map((p)=>{
    if(!teams.includes(p.team)){
        //let nteam={team:p.team,points:0,isActive:p.isActive}
        teams.push(p.team);
    }
    return true
})

pointscalculate()

function pointscalculate(){
    for(let i=0;i<teams.length;i++){
        let score=0;
        for(let j=0;j<players.length;j++){
            if(players[j].team === teams[i]){
                if(players[j].isActive){
                    score=score+players[j].points
                }
            }
        }
        let t={teams:teams[i],score:score};
        teamspoints.push(t);
    }
    //console.log('teams point::',teamspoints)
}

sortpoints();

function sortpoints(){
    for(let i=0;i<teamspoints.length;i++){
        for(let j=(i+1);j<teamspoints.length;j++){
            if(teamspoints[i].score >= teamspoints[j].score){
                if(teamspoints[i].score !== teamspoints[j].score){
                      let temp=teamspoints[i]
                      teamspoints[i]=teamspoints[j]
                      teamspoints[j]=temp  
                }
                else{
                    if(teamspoints[i].teams > teamspoints[j].teams){
                      let temp=teamspoints[i]
                      teamspoints[i]=teamspoints[j]
                      teamspoints[j]=temp  
                    }
                }
            }
        }
    }
    //console.log('sorting::',teamspoints);
}

export default teamspoints;



