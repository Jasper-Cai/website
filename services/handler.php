<?php
$serviceName = $_GET["serviceName"];

    if($serviceName == "createUser"){
        $username = $_GET["username"];
        $password = $_GET["password"];
        $role     = $_GET["role"];
        $createdBy = $_GET["createdBy"];

        $servername = "localhost";
        $dbUsername = "lzlianxin";
        $dbPassword = "Lzlianxin1998!";
        $dbName = "lzlianxin";

        $conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

        if ($conn -> connect_error){
                die ("connection failed: " . $conn -> connect_error);
        }

        $sql = "INSERT INTO `user` (`username`, `password`, `role`, `createdBy`)
        VALUES ('$username', '$password', '$role', '$createdBy')";

        $status = true;
        $message = "账号创建成功";
        $results = array("status"=>$status, "message"=>$message, "czx"=>100);
        $jsonResults = json_encode($results);

        if ($conn->query($sql) === TRUE) {
            echo $jsonResults;
        } else {
            $results["status"] = false;
            $results["message"] = "Error: " . $sql . "<br>" . $conn->error;
            $jsonResults = json_encoded($results);
            echo $jsonResults;
        }

        $conn->close();

    } elseif($serviceName == "getUserList"){

        $servername = "localhost";
        $username = "lzlianxin";
        $password = "Lzlianxin1998!";
        $dbName = "lzlianxin";

        // create connection
        $conn = new mysqli($servername,$username,$password,$dbName);

        //check connection
        if ($conn -> connect_error){
                die ("connection failed: " . $conn -> connect_error);
        }

        $sql = "SELECT * FROM `user`";

        $result = $conn -> query($sql);

        if ($result -> num_rows > 0){
            echo "<table>
                    <tr><th>username</th>
                        <th>password</th>
                        <th>role</th>
                        <th>createdBy</tr>";
            while($row = $result -> fetch_assoc()){
                echo "<tr><td>" . $row["username"] . "</td>
                        <td>" . $row["password"] . "</td>
                        <td>" . $row["role"] . "</td>
                        <td>" . $row["createdBy"] . "</td></tr>";

            }
            echo "</table>";
        }else{
            echo "0 results";
        }

        $conn -> close();
        
    } elseif($serviceName == "login") {

        $loginusername = $_GET["loginusername"];
        $loginpassword = $_GET["loginpassword"];

        $servername = "localhost";
        $username = "lzlianxin";
        $password = "Lzlianxin1998!";
        $dbName = "lzlianxin";

        // create connection
        $conn = new mysqli($servername,$username,$password,$dbName);

        //check connection
        if ($conn -> connect_error){
                die ("connection failed: " . $conn -> connect_error);
        }

        $sql = "SELECT * FROM `user` WHERE username='$loginusername' AND password='$loginpassword'";

        $result = $conn -> query($sql);

        if ($result -> num_rows > 0){
            echo "登录成功";
        }else{
            echo "登陆失败";
        }

        $conn -> close();

    } elseif($serviceName == "deleteUser"){
        $username = $_GET["username"];
        $password = $_GET["password"];
        $role     = $_GET["role"];

        $servername = "localhost";
        $dbUsername = "lzlianxin";
        $dbPassword = "Lzlianxin1998!";
        $dbName = "lzlianxin";

        $conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

        if ($conn -> connect_error){
            die ("connection failed: " . $conn -> connect_error);
        }

        $sql = "DELETE FROM `user` WHERE `username`='$username'";

        $status = true;
        $message = "账号删除成功";
        $results = array("status"=>$status, "message"=>$message);
        $jsonResults = json_encode($results);

        if ($conn->query($sql) === TRUE) {
            echo $jsonResults;
        } else {
            $results["status"] = false;
            $results["message"] = "Error: " . $sql . "<br>" . $conn->error;
            $jsonResults = json_encoded($results);
            echo $jsonResults;
        }

        $conn->close();

    }  elseif($serviceName == "updateUser"){
        $oldUsername = $_GET["oldUsername"];
        $newUsername = $_GET["newUsername"];
        $newPassword = $_GET["newPassword"];
        $newRole     = $_GET["newRole"];
        $newCreatedBy = $_GET["newCreatedBy"];

        $servername = "localhost";
        $dbUsername = "lzlianxin";
        $dbPassword = "Lzlianxin1998!";
        $dbName = "lzlianxin";

        $conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

        if ($conn -> connect_error){
            die ("connection failed: " . $conn -> connect_error);
        }

        $sql = "UPDATE `user` SET `username`='$newUsername', `password`='$newPassword', `role`='$newRole', `createdBy`='$newCreatedBy' WHERE `username`='$oldUsername'";

        $status = true;
        $message = "账户更新成功";
        $results = array("status"=>$status, "message"=>$message);
        $jsonResults = json_encode($results);

        if ($conn->query($sql) === TRUE) {
            echo $jsonResults;
        } else {
            $results["status"] = false;
            $results["message"] = "Error: " . $sql . "<br>" . $conn->error;
            $jsonResults = json_encode($results);
            echo $jsonResults;
        }

        $conn->close();




      //inventory:
    } elseif($serviceName == "createCar"){
        $carType = $_GET["carType"];
        $carModel = $_GET["carModel"];
        $configuration = $_GET["configuration"];
        $keyWords = $_GET["keyWords"];

        $servername = "localhost";
        $dbUsername = "lzlianxin";
        $dbPassword = "Lzlianxin1998!";
        $dbName = "lzlianxin";

        $conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

        if ($conn -> connect_error){
                die ("connection failed: " . $conn -> connect_error);
        }

        $sql = "INSERT INTO `inventory` (`carType`, `carModel`, `configuration`, `keyWords`)
        VALUES ('$carType', '$carModel', '$configuration', '$keyWords')";

        $status = true;
        $message = "汽车信息创建成功";
        $results = array("status"=>$status, "message"=>$message, "czx"=>100);
        $jsonResults = json_encode($results);

        if ($conn->query($sql) === TRUE) {
            echo $jsonResults;
        } else {
            $results["status"] = false;
            $results["message"] = "Error: " . $sql . "<br>" . $conn->error;
            $jsonResults = json_encoded($results);
            echo $jsonResults;
        }

        $conn->close();

    } elseif($serviceName == "getCarList"){

        $servername = "localhost";
        $username = "lzlianxin";
        $password = "Lzlianxin1998!";
        $dbName = "lzlianxin";

        // create connection
        $conn = new mysqli($servername,$username,$password,$dbName);

        //check connection
        if ($conn -> connect_error){
                die ("connection failed: " . $conn -> connect_error);
        }

        $sql = "SELECT * FROM `inventory`";

        $result = $conn -> query($sql);

        if ($result -> num_rows > 0){
            echo "<table>
                    <tr><th>carType</th>
                        <th>carModel</th>
                        <th>configuration</th>
                        <th>keyWords</tr>";
            while($row = $result -> fetch_assoc()){
                echo "<tr><td>" . $row["carType"] . "</td>
                        <td>" . $row["carModel"] . "</td>
                        <td>" . $row["configuration"] . "</td>
                        <td>" . $row["keyWords"] . "</td></tr>";

            }
            echo "</table>";
        }else{
            echo "0 results";
        }

        $conn -> close();
        
    } elseif($serviceName == "deleteCar"){
        $carType = $_GET["carType"];
        $carModel = $_GET["carModel"];
        $configuration = $_GET["configuration"];

        $servername = "localhost";
        $dbUsername = "lzlianxin";
        $dbPassword = "Lzlianxin1998!";
        $dbName = "lzlianxin";

        $conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

        if ($conn -> connect_error){
            die ("connection failed: " . $conn -> connect_error);
        }

        $sql = "DELETE FROM `inventory` WHERE `carType`='$carType'";

        $status = true;
        $message = "汽车信息删除成功";
        $results = array("status"=>$status, "message"=>$message);
        $jsonResults = json_encode($results);

        if ($conn->query($sql) === TRUE) {
            echo $jsonResults;
        } else {
            $results["status"] = false;
            $results["message"] = "Error: " . $sql . "<br>" . $conn->error;
            $jsonResults = json_encoded($results);
            echo $jsonResults;
        }

        $conn->close();

    } elseif($serviceName == "updateCar"){
        $oldCarType = $_GET["oldCarType"];
        $newCarType = $_GET["newCarType"];
        $newCarModel = $_GET["newCarModel"];
        $newConfiguration = $_GET["newConfiguration"];
        $newKeyWords = $_GET["newKeyWords"];

        $servername = "localhost";
        $dbUsername = "lzlianxin";
        $dbPassword = "Lzlianxin1998!";
        $dbName = "lzlianxin";

        $conn = new mysqli($servername, $dbUsername, $dbPassword, $dbName);

        if ($conn -> connect_error){
            die ("connection failed: " . $conn -> connect_error);
        }

        $sql = "UPDATE `inventory` SET `carType`='$newCarType', `carModel`='$newCarModel', `configuration`='$newConfiguration', `keyWords`='$newKeyWords' WHERE `carType`='$oldCarType'";

        $status = true;
        $message = "车辆更新成功";
        $results = array("status"=>$status, "message"=>$message);
        $jsonResults = json_encode($results);

        if ($conn->query($sql) === TRUE) {
            echo $jsonResults;
        } else {
            $results["status"] = false;
            $results["message"] = "Error: " . $sql . "<br>" . $conn->error;
            $jsonResults = json_encode($results);
            echo $jsonResults;
        }

        $conn->close();
    }











?>
