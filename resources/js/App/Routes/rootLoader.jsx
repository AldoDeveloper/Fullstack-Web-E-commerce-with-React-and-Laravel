import * as fatchApis from '../api/controller';

async function loaderAction({request, params}){
     return { req: request, par:params, data: await fatchApis.default.tokensData() }
}
export default { loaderAction };