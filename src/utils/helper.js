export const getFormattedDate=(timestamp)=>{
    const date=new Date(timestamp);
    console.log(date);
    const day=date.getDay()/10?`0${date.getDay()}`:date.getDay();
    const month=(date.getMonth()+1)/10?`0${date.getMonth()+1}`:date.getMonth()+1;
    return `${day}/${month}/${date.getFullYear()}`;
}