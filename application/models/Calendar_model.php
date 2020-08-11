<?php
    class Calendar_model extends CI_Model {

        private $_mYear;
        private $_mMonth;
        private $_mDay;
        private $_mDate;

        private $_startDOW;
        private $_lastDOW;
        private $_line_num;

        private $_day_arr;
        private $_month_arr;

        private $_mPreTotalDays;
        private $_mTotalDays;

        protected $CI;

        public function __construct(){
                parent::__construct();
                $this->CI =& get_instance();
                $this->load->model('Plan_model');
                $this->_day_arr = array('일', '월', '화', '수', '목', '금', '토');
        }

        public function initialise($year, $month, $day){
                $this->_mYear = $year;
                $this->_mMonth = $month;
                $this->_mDay = $day;
                $this->_mDate = sprintf('%s-%s-%s', $this->_mYear, $this->_mMonth, $this->_mDay);
                $this->_startDOW = $this->get_sdow_index();
                $this->_mPreTotalDays = $this->_get_total_days($this->_mMonth-1, $this->_mYear);
                $this->_mTotalDays = $this->_get_total_days($this->_mMonth, $this->_mYear);
                $this->_line_num = $this->find_line_num();
                $this->make_month_array();
        }

        public function make_month_array(){
                //전달 저장
                $pre_total_days = $this->_mPreTotalDays;

                for($k = $this->_startDOW-1 ; $k >= 0 ; $k--){
                        $this->_month_arr[$k] = $pre_total_days;
                        $pre_total_days--;
                }

                //이번달 저장
                $val = 1;
                $index = $this->_startDOW;
                for( ; $val<=$this->_mTotalDays ; $index++){
                        $this->_month_arr[$index] = $val;
                        $val++;
                }

                //다음달 저장
                $val = 1;
                for($j = $index ; $j<=$this->_line_num*7 ; $j++){
                        $this->_month_arr[$j] = $val;
                        $val++;
                }
        }

        // public function get_month_plans(){
        //         $data=$this->Plan_model->get_month_plans($this->_mMonth, $this->_mYear);
                
        //         // $this->db->order_by('date', 'ASC');
        //         // $this->db->like('date', date('Y-m', mktime(0,0,0,$this->_mMonth, 1, $this->_mYear)));
        //         // $data=$this->db->get('plan')->result();
        //         return $data;
        // }

        public function get_month_arr(){
                return $this->_month_arr;
        }

        public function get_sdow_str(){
                return $this->_day_arr[date('w',strtotime(sprintf('%s-%s-%s', $this->_mYear, $this->_mMonth, 1)))];
        }

        public function get_sdow_index(){
                return date('w',strtotime(sprintf('%s-%s-%s', $this->_mYear, $this->_mMonth, 1)));
        }

        public function get_line_num(){
                return $this->_line_num;
        }
        public function find_line_num(){
                $sum = $this->_mTotalDays+$this->_startDOW;
                if($sum > 35)
                        return 6;
                elseif($sum> 28)
                        return 5;
                else   
                        return 4;
        }
        

        public function set_year($year){
                $this->_mYear = $year;
        }
        public function get_year(){
                return $this->_mYear;
        }
        public function set_month($month){
                $this->_mMonth = $month;
        }
        public function get_month(){
                return $this->_mMonth;
        }
        public function set_day($day){
                $this->_mDay = $day;
        }
        public function get_day(){
                return $this->_mDay;
        }

        public function get_pre_total_days(){
                return $this->_mPreTotalDays;
        }
        public function get_total_days(){
                return $this->_mTotalDays;
        }

        private function _get_total_days($month, $year){
                $this->CI->load->helper('date');
                
                if($month==0)
                        return days_in_month($month+1, $year-1);
                elseif($month==13)
                        return days_in_month($month-1, $year+1);
                else
                        return days_in_month($month, $year);
        }
    }
