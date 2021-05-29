const userRef = firebase.firestore().collection('Users')
const send = async () => {
    try {
        var uid = document.getElementById("email").value;
        var regex = new RegExp("^[A-Za-z0-9._+-][A-Za-z0-9._+-]+$");
        if (regex.test(uid) && checkExist(uid)) {
            await userRef.doc(uid).set({
                Invited: false,
            })
            console.log("User registered")
        } else {
            document.getElementById("emailbox1").style.border = "1px solid #FD0000";
            document.getElementById("email").style.color = "#FD0000";
        }
    } catch (err) {
        console.log(err)
    }

}
const checkExist = async (uid) => {
    try {
        var userProfile = await userRef.doc(uid).get()
        return userProfile.exists()
    } catch (err) {
        console.log(err)
    }
}


document.getElementById('emailSender1').addEventListener('click', () => {
    console.log("clicked")
    send()
}
);

document.getElementById('emailSender2').addEventListener('click', () => {
    console.log("clicked")
    send()
}
);


