<?php

    class Plan extends CI_Controller{

        public function __construct(){
            parent::__construct();
            
            $this->load->model('Plan_model');
            $this->load->helper('date');
            $this->load->helper('url');
            $this -> load -> helper('basic_helper');
        }

        public function index(){            
            $this->load->view('plan/list_view');
        }

        public function show_with_date($date){
            $data["PLANS_LIST"] = $this->Plan_model->get_plans($date);
            $this->load->view('plan/list_view', $data);
        }

        public function new(){
            $this->load->view('plan/new');
        }

        public function create(){
            $title = $this->input->post("title");
            $description = $this->input->post("description");
            $date = $this->input->post("date");         

            $data = array(
                'title' => $title,
                'description' => $description ,
                'date' => $date
            );

            $result = $this->Plan_model->create_post($data);

            // print_r($this->db->last_query());

            if ( $result ) {
                alert_refresh_close("생성됐다!");
                exit;
            } else {
                alert('먼가오류.');
                exit;
            }
        }
        
        public function edit($id){
            $data["PLAN"] = $this->Plan_model->get_one_plan($id);
            print_r($data);
            $this->load->view('Plan/edit', $data);
        }
        
        public function put(){
            $id = $this->input->post("id");
            $title = $this->input->post("title");
            $description = $this->input->post("description");
            $date = $this->input->post("date");

            $data = array(
                'title' => $title,
                'description' => $description ,
                'date' => $date
            );
            
            $result = $this->Plan_model->modify_post($data, $id);

            // print_r($this->db->last_query());

            if ( $result ) {
                alert_refresh_close("수정됐다!");
                exit;
            } else {
                alert('먼가오류.');
                exit;
            }
            
        }

        public function delete($id){
            $result = $this->Plan_model->delete_plan($id);

            if ( $result ) {
                alert_refresh_close("지웠다!");
                exit;
            } else {
                alert('먼가오류.');
                exit;
            }
        }



        // public function process_index()
        // {
        //         echo 'Hello World!';
        // }

        // public function _remap($method, $params = array()){
        //     $method = 'process_'.$method;
        //     if (method_exists($this, $method))
        //     {
        //             return call_user_func_array(array($this, $method), $params);
        //     }else{
        //         print_r("test");
        //     }
            
        // }

    }