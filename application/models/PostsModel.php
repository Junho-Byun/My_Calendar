<?php defined('BASEPATH') OR exit('No direct script access allowed');

class PostsModel extends CI_model {

	function __construct(){ 
        parent::__construct(); 
        
        $this->load -> helper('url');
	} 
    
    function get_post($id) {
        //query 함수는 DB에 쿼리를 요청하는 것이며, 이 과정에서 오류가 뜨면 오류메시지가 나옵니다.
        $this-> db -> where('id', $id);
        return $this-> db -> get('post')->result();
        
        
    }

    function get_post_list() {
        //query 함수는 DB에 쿼리를 요청하는 것이며, 이 과정에서 오류가 뜨면 오류메시지가 나옵니다.
        return $this-> db -> get('post')->result();
        
        
    }

    function test2($data) {
        //query 함수는 DB에 쿼리를 요청하는 것이며, 이 과정에서 오류가 뜨면 오류메시지가 나옵니다.
        return $this->db->insert('post', $data);

    }

    
}