import request from "@/utils/request";

export function getTest() {
    return request({
        url: '/test',
        method: "get",
    });
}
export function refreshUser() {
    return request({
        method: "post",
        url: '/user'
    })
}
export function getUsersByRoom(roomId) {
    return request({
        method: "get",
        url: "/room/users/" + roomId
    })
}