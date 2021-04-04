import Vue from "vue";
const vm = new Vue();
const getToast = () => {
    return vm.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        // timerProgressBar: true,
        didOpen: toast => {
            toast.addEventListener("mouseenter", vm.$swal.stopTimer);
            toast.addEventListener("mouseleave", vm.$swal.resumeTimer);
        }
    });
};
const success = (title, msg) => {
    getToast().fire({
        icon: "success",

        titleText: title,
        footer: msg
    });
};
const error = (title, msg) => {
    getToast().fire({
        icon: "error",
        // title: "Signed in successfully",
        titleText: title,
        footer: msg
    });
};
const roomCreated = () => {
    success("Created", "Room Record Created Successfully!");
};
const created = () => {
    success("Created", "Record Created Successfully!");
};
const updated = () => {
    success("Updated", "Record Updated Successfully!");
};

const deleted = () => {
    success("Deleted", "Record Deleted Successfully!");
};

const successAnswer = (title = "Brilliant! (:") => {
    vm.$swal.fire({
        icon: "success",
        title: title,
        backdrop: `
        rgba(0,0,123,0.4)
        url("https://media3.giphy.com/media/KBDuRNfVQ7in4unmWA/giphy.gif")
        left top
        no-repeat
  `
    });
};
const wrongAnswer = (title = "NOOOOOO :(") => {
    vm.$swal.fire({
        icon: "error",
        title: title,
        backdrop: `
        rgba(0,0,123,0.4)
        url("https://media4.giphy.com/media/RfGZ5IHpgmSYLy3U0x/giphy.gif")
        left top
        no-repeat
  `
    });
};

const areYouSureAlert = (title, confirmText, callback) => {
    vm.$swal
        .fire({
            icon: "warning",
            title: title,
            showCancelButton: true,
            confirmButtonText: confirmText
        })
        .then(result => {
            callback(result);
        });
};
export default {
    success,
    error,
    created,
    roomCreated,
    updated,
    deleted,
    successAnswer,
    wrongAnswer,
    areYouSureAlert
};