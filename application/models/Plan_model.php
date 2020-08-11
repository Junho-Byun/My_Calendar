<?php
    class Plan_model extends CI_Model {
        protected $CI;

        public function __construct(){
                // Call the CI_Model constructor]
                parent::__construct();
                $this->CI =& get_instance();
        }

        public function get_plans($date){
                $this-> db -> where('date', $date);
                return $this-> db -> get('plan')->result();   
        }

        public function get_one_plan($id){
                $this->db->where('id', $id);
                return $this->db->get('plan')->result();
        }

        public function create_post($data){
                return $this->db->insert('plan', $data);
        }

        function modify_post($data, $id) {
                //query 함수는 DB에 쿼리를 요청하는 것이며, 이 과정에서 오류가 뜨면 오류메시지가 나옵니다.
                return $this-> db -> update('plan', $data, "id = '$id'");
        }

        function delete_plan($id) {
                //query 함수는 DB에 쿼리를 요청하는 것이며, 이 과정에서 오류가 뜨면 오류메시지가 나옵니다.
                return $this-> db -> delete('plan', "id = '$id'");
        }
        
        public function get_month_plans($month, $year){
                $this->db->order_by('date', 'ASC');
                $this->db->like('date', date('Y-m', mktime(0,0,0,$month, 1, $year)));
                $data = $this->db->get('plan')->result();
                // print_r($this->db->last_query());
                // print_r($data);
                return $data;
        }


        function get_plan_count() {
                //query 함수는 DB에 쿼리를 요청하는 것이며, 이 과정에서 오류가 뜨면 오류메시지가 나옵니다.
                return $this-> db -> count_all('plan');   
            }
}
