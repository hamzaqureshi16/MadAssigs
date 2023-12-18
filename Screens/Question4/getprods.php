<?php 
$server = 'localhost';
$username = 'root';
$password = '';
$database = 'assig';
$conn = null;

try{
    $conn = new PDO("mysql:host=$server;dbname=$database;", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch(PDOException $e){
    die("Connection failed: " . $e->getMessage());
}

//insert dummy data into products table
$sql = "SELECT * FROM products";

$results  = $conn->query($sql);

echo json_encode($results->fetchAll(PDO::FETCH_ASSOC));