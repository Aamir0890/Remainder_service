const sender=require('../config/emailConfig')
const {TicketRepository}=require('../repository/index')
const repo=new TicketRepository();

const sendBasicEmail=(mailFrom ,mailTo,mailSubject,mailBody)=>{
    try{
        sender.sendMail({
            from:mailFrom,
            to:mailTo,
            subject:mailSubject,
            text:mailBody
         })
    }catch(error){
        console.log(error)
    }
     
}
const fetchPendingEmails=async()=>{
      try{
        
        const response=await repo.get({status:"PENDING"});
        return response; 
      }catch(error){
        console.log(error)
      }
}
const createNotification=async(data)=>{
    try{
      const response=await repo.create(data);
      return response
    }catch(error){
        console.log(error)
    }
}

const updateTicket=async(ticketId,data)=>{
  try{  const response=await repo.update(ticketId,data)
    return response

  }catch(error){
    console.log(error)
  }
 
  
}

module.exports={sendBasicEmail,fetchPendingEmails,createNotification,updateTicket}