<?php 

header("p3p: CP=\"IDC DSP COR ADM DEVi TAIi PSA PSD IVAi IVDi CONi HIS OUR IND CNT\""); 
session_start();

require("F:/Documents/GitHub/Higherbound.org/forms-db/machform.php");

$mf_param['form_id'] = 10715;
$mf_param['base_path'] = 'http://localhost:81/forms-db/';
$mf_param['show_border'] = true;
display_machform($mf_param);

?>