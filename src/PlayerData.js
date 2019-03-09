var players = [
    { fname: 'Geary',lname:'Alice', score: 96 },
    { fname: 'Junge',lname:'John', score: 96 },
    { fname: 'Vera',lname:'Rob', score: 88 }
]

sortdata();
function sortdata(){
    for(let i=0;i<players.length;i++){
        for(let j=(i+1);j<players.length;j++){
            if(players[i].score >= players[j].score){
                if(players[i].score !== players[j].score){
                      let temp=players[i]
                      players[i]=players[j]
                      players[j]=temp  
                }
                else{
                    if(players[i].lname > players[j].lname){
                      let temp=players[i]
                      players[i]=players[j]
                      players[j]=temp  
                    }

                }
            }
        }
    }
}

export const addplayer = (p) =>{
    p.fname=p.fname.replace(p.fname.charAt(0),p.fname.charAt(0).toUpperCase());
    p.lname=p.lname.replace(p.lname.charAt(0),p.lname.charAt(0).toUpperCase());
    players.push({...p});
    sortdata();
}

export const deleteplayer = (id) =>{
    players.splice(id,1)
    sortdata();
}

export const editplayer = (id,p) => {
    players[id].fname=p.fname.replace(p.fname.charAt(0),p.fname.charAt(0).toUpperCase());
    players[id].lname=p.lname.replace(p.lname.charAt(0),p.lname.charAt(0).toUpperCase());
    players[id].score=p.score
    sortdata();
}

export default  players;