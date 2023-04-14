<?php

namespace App\Request\Advertisment;

use App\Trait\Format;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator as FacadesValidator;
use Illuminate\Validation\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\File as RulesFile;

class AdvertismentStoreRequest{
     use Format;
     public Request $request;

     public function __construct(Request $request)
     {
          $this->request = $request;
     }
     
     public function validation() : Validator{
          $credentials = FacadesValidator::make($this->request->all(), $this->rule(), $this->messages());
          return $credentials;
     }

     protected function rule(){
          return [
               'advertisment'         => ['required'],
               'advertisment.title'   => ['required', 'max:120'],
               'advertisment.ket'     => ['required'],
               'advertisment.link'    => ['required'],
               'advertisment.expired' => ['required', 'integer'],
               'advertisment.path'    => 
               [ 
                  'required', 'mimes:jpg,png,web',
                   RulesFile::image()->max(12 * 1024)
                  ->dimensions(Rule::dimensions()
                  ->minWidth(970)->minHeight(298)
                  ->maxWidth(1000)->maxHeight(300))
               ],
          ];
     }

     protected function messages(){
          return [
               'advertisment.required' => 'Data Advertisment wajib diisi..',
               'advertisment.title.required'    => 'Judul iklan Wajib diisi...',
               'advertisment.ket.required'      => 'Keterangan wajib diisi...',
               'advertisment.link.required'     => 'Url Link wajib diisi...',
               'advertisment.path.required'     => 'picture wajib diisi...',
               'advertisment.path.mimes'        => 'Picture Support JPG,PNG,WEB',
               'advertisment.path.dimensions'   => 'Pictures dimensi salah...'
          ];
     }
}