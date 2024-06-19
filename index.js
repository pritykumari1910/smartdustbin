var rootRef = firebase.database().ref().child("bins");
  rootRef.on("child_added", snap => {
    var status = snap.child("STATUS01").val();
    $("#t1").append("<tr><td>bins01</td><td>"+ status +"</td></tr>");

  });

  var rootRef = firebase.database().ref().child("bins01");
    rootRef.on('child_added', snap  => {
      var status1 = snap.child("STATUS02").val();
      $("#t1").append("<tr><td>bins02</td><td>"+ status1 +"</td></tr>");

    });


    var rootRef = firebase.database().ref().child("bins02");
    rootRef.on('child_added', snap  => {
      var status1 = snap.child("STATUS03").val();
      $("#t1").append("<tr><td>bins03</td><td>"+ status1 +"</td></tr>");

    });


    var rootRef = firebase.database().ref().child("bins03");
    rootRef.on('child_added', snap  => {
      var status1 = snap.child("STATUS04").val();
      $("#t1").append("<tr><td>bins04</td><td>"+ status1 +"</td></tr>");

    });

    var rootRef = firebase.database().ref().child("bins04");
    rootRef.on('child_added', snap  => {
      var status1 = snap.child("STATUS05").val();
      $("#t1").append("<tr><td>bins05</td><td>"+ status1 +"</td></tr>");

    });