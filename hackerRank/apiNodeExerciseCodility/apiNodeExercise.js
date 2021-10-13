'use strict';
const express = require('express');
const app = express();
app.use(express.json());

let candidates = Array()
const CODES ={
  NOT_FOUND : 404,
  SUCCESS : 200,
  BAD_REQ : 400,
}

app.post('/candidates', function(req, res) {
  
  try{

    if(req.body.id){
      let candidate = {
        id : req.body.id,
        name : req.body.name,
        skills : req.body.skills,
      }

      candidates.push(candidate)
      res.status(CODES.SUCCESS). send('Succesfully!')
      console.log(candidates)
    
    } else {
      throw new Error('Error:::')
    }

  } catch(err){
    res.status(CODES.BAD_REQ). send('Bad Request. ' + err)
  }

});

app.get('/candidates/search', function(req, res) {

  res.setHeader("Content-Type", "application/json")

  if( candidates.length === 0) {
    res.status(CODES.NOT_FOUND).send()
    return
  }

  let objResult = {score: 0, selected: {} }
  if(req.query.skills ){
    
    candidates.forEach( candidate =>{

      const arrSkillsByCandidate = candidate.skills
      const arrSkillsToSearch = req.query.skills.split(',')

      let scoreAcumByCandidate = 0
      arrSkillsToSearch.forEach( skillToSearch => {
        
         if (arrSkillsByCandidate.includes(skillToSearch)){
           
            scoreAcumByCandidate++
            objResult = 
              scoreAcumByCandidate > objResult.score ?  {score: scoreAcumByCandidate, selected: candidate }  : objResult
         }

      })

    })
    
  } else {
    res.status(CODES.BAD_REQ).send()
    return
  }

  if(objResult.score == 0 ) {
    res.status(CODES.NOT_FOUND).send()
  }

  console.log('result:',objResult)
  res.status(CODES.SUCCESS).send( objResult.selected )

});

app.listen(process.env.HTTP_PORT || 3000);
