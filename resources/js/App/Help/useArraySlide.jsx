
const useArray = ({data, setPages}) =>{
     var callbackData = [];
     const coutPages = () =>{
          return Math.ceil(data.length / setPages);
     }
     if(coutPages() > 0){
          Array.from({length: coutPages()}).forEach((_, key) =>{
               const count = (key + 1) * setPages;
               callbackData.push(data.slice((count - setPages), count));
          });
          return callbackData;
     }
     return callbackData;
}
export default useArray;