
const useGetProvinsi = async () =>{
    const getProvincies = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`, {
        method: 'GET',
       'Content-Type' : 'Application/json'
   });
   return getProvincies;
}

const useGetKabupaten = async({id}) =>{
    const getKabupaten = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${parseInt(id)}.json`, {
         method: 'GET',
        'Content-Type' : 'Application/json'
    });
    return getKabupaten;
}

const useGetKecamatan = async({id}) => {
    const getKecamatan = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${parseInt(id)}.json`, {
        method: 'GET',
       'Content-Type' : 'Application/json'
   });
   return getKecamatan;
}

const useGetKelurahan = async({id}) => {
    const getKelurahan = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${parseInt(id)}.json`, {
        method: 'GET',
       'Content-Type' : 'Application/json'
   });
   return getKelurahan;
}

export { useGetProvinsi, useGetKabupaten, useGetKecamatan, useGetKelurahan}