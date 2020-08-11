<?php

    class Post extends CI_Controller{

        public function __construct(){
            parent::__construct();
            
            $this->load->model("PostsModel");

        }

        public function index(){

            $data["LIST"] = $this->PostsModel->get_post_list();

            $this->load->view('Posts/list', $data);

        }

        public function show($id){
            $data["POST_ITEM"] = $this->PostsModel->get_post($id);

            $this->load->view('Posts/show', $data);
        }

        public function new(){
            $this->load->view('Posts/new');
        }

        public function create(){
            $content = $this-> input-> post("content");
            $name = $this-> input-> post("name");
            $passwd = $this-> input-> post("passwd");
            echo $content.'  '.$name.'  '. $passwd;

            $data = array(
                'contents' => $content ,
                'name' => $name ,
                'password' => $passwd
            );

             $result = $this->PostsModel->test2($data);
             print_r ($result);

             redirect('/Post');
        }
        
        public function edit(){

        }


        
    }