<?php

use App\Pais;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dados = [
            'nome'=>"Brasil"
          ];
            Pais::create($dados);
            echo "Pais criado!";    
    }
}
