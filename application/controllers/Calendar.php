<?php

    class Calendar extends CI_Controller{

        public function __construct(){
            parent::__construct();
            
            $this->load->model('Calendar_model');
            $this->load->model('Plan_model');
            $this->load->library('calendar');
            $this->load->helper('date');
            $this->load->helper('url');
        }

        public function index(){
            $data = $this->_initialise_calendar(date('Y'), date('m'), date('d'));
            // print_r($data);
            $this->load->view('calendar_view', $data);
        }

        public function update_calendar($year, $month){
            $data = $this->_initialise_calendar($year, $month, 1); 
            // print_r($data);
            $this->load->view('calendar_view', $data);
        }

        private function _initialise_calendar($year, $month, $day){
            $this->Calendar_model->initialise($year, $month, $day);
            $data['MONTH_ARR'] =  $this->Calendar_model->get_month_arr();
            $data['LINE_NUM'] = $this->Calendar_model-> get_line_num();
            $data['THIS_YEAR'] = $this->Calendar_model-> get_year();
            $data['THIS_MONTH'] = $this->Calendar_model-> get_month();
            $data['PLANS_LIST'] = $this->Plan_model->get_month_plans($data['THIS_MONTH'], $data['THIS_YEAR']);
            // print_r($this->db->last_query());
            $data['TMP_NUM'] = 1;

            return $data;
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