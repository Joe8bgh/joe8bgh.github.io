var idToken = null;

function checkLogin() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    idToken = url.searchParams.get("id_token");
    if (idToken != null) {
      document.getElementById("welcomMsg").innerHTML = "signed in";
      auth();
    }
}

function auth() {
    AWs.config.update({
      region: "us-east-1",
    });

    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId : 'us-east-1:6a5e7f11-0c0c-4042-b39b-06cc31812173',
      Logins : {
        "cognito-idp.us-east-1.amazonaws.com/us-east-1_lfIHIUs1c": idToken
      }
    });
}

function insertItem() {

    const x = {
    "id": "22-003",
    "project": "id: 22-003,project_name: Test Project 3,scope: ,sponsor: ,buiness_lead: ,it_lead: ,schedule: On-Track,financial: On-Track,functionality: N/A,last_updated: ,next_steps: ,notes: ,project_start: ,project_end: ,go_live: ,milestone: ,baseline_due_date: ,revised_due_date: ,status: Future,percent_complete: ,comments: ,issue-risk: ,due_date: ,type: Issue,mitigation: n"
    };

    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = {
        TableName :"http-crud-tutorial-function",
        Item:x
    };
    docClient.put(params, function(err, data) {
        if (err) {
            document.getElementById('textarea').innerHTML = "Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            document.getElementById('textarea').innerHTML = "PutItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
        }
    });
}


function readItem() {

    var docClient = new AWS.DynamoDB.DocumentClient();

    var params = {
        TableName: "http-crud-tutorial-function",
        Key:{
            "FirstName": "22-003",// Partition Key
        }
    };
    docClient.get(params, function(err, data) {
        if (err) {
            document.getElementById('textarea').innerHTML = "Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2);
        } else {
            document.getElementById('textarea').innerHTML = "GetItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
        }
    });
}















function getResults() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "https://b1ljlllud4.execute-api.us-east-1.amazonaws.com/items", true);
    xhttp.send();
}
