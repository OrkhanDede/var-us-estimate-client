import request from "@/utils/request";

export function createRoom(room) {
    return request({
        url: '/room',
        method: "post",
        data: room
    });
}
export function getRoomState(id) {
    return request({
        method: "get",
        url: "/room/" + id
    })
}
export function startSession(id) {
    return request({
        method: "post",
        url: "/room/start/" + id
    })
}
export function estimatePoint(meetingId, point) {
    return request({
        method: "post",
        url: "/room/estimate",
        data: {
            meetingid: meetingId,
            point: point
        }
    })
}
export function getEstimatePoint(id) {
    return request({
        method: "get",
        url: "/room/estimate/" + id,
    })
}
export function startNextSession(id) {
    return request({
        method: "post",
        url: "/room/next/" + id,
    })
}