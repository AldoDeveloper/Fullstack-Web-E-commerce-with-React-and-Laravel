
function ucfrist(str){
     if(!str) return str;
     return str[0].toUpperCase() + str.slice(1);
}

function limitString(data, limit, options){
     var argsStr;
     if(typeof data === 'string'){
        if(data.length >= limit){
             argsStr = data.substring(0, limit).toLocaleUpperCase() + options;
        }
        else argsStr = data.toLocaleUpperCase();   
     }
     return argsStr;
}

function randomInteger(){
     return Math.random() * 10 / 2;
}

function getRandomArbitrary(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive 
}

function joinString(string){
     let dataToDeff;
     const toArray = string.split(' ');
     if(toArray instanceof Array){
          dataToDeff = toArray.join('-').toLocaleLowerCase();
     }
     return dataToDeff;
}

function stringConvert(data){
     let array;
     let string = '';
     array = data.split('-');
     array.forEach((values, key) =>{
          string += values + " ";
     })
     return string.substring(0, (string.length - 1));
}

function formatRupiah(integer){
     var string_number = integer.toString(),
          split	= string_number.split(','),
          sisa 	= split[0].length % 3,
          rupiah 	= split[0].substr(0, sisa),
          ribuan 	= split[0].substr(sisa).match(/\d{1,3}/gi);
     if (ribuan) {
          var separator = sisa ? '.' : '';
          rupiah += separator + ribuan.join('.');
     }
     rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
     return rupiah;
}

function uuidv4() {
     return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
       (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
     );
   }
   
export default {
          ucfrist, limitString,
          joinString, randomInteger,
          stringConvert, formatRupiah,
          getRandomArbitrary, uuidv4
      }