import { call, put, takeLatest } from "redux-saga/effects";
import { commentService } from "../../../services/CommentService";
import { notifiFuntion } from "../../../utils/Notification/Notification";
import {
  DELETE_COMMENT_SAGA,
  GET_COMMENT_SAGA,
  POST_INSERTCOMMENT_SAGA,
} from "../../constants/CyberBugs/CommentConstant";
import { GET_COMMENT_ALL } from "../../constants/ConstantReducer/CommentConstantReducer";
import { GET_TASK_DETAIL_SAGA } from "../../constants/CyberBugs/ProjectConstant";

function* commentTask(action) {
  console.log("action", action.taskId);
  try {
    const { data, status } = yield call(() =>
      commentService.commentTask(action.taskId)
    );
    yield put({
      type: GET_COMMENT_ALL,
      listCommentTask: data,
    });

    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
}

function* insertCommentTask(action) {
  const { insertComment } = action;
  console.log(insertComment.taskId);
  try {
    const { data, status } = yield call(() =>
      commentService.insertComment(insertComment)
    );

    yield put({
      type: GET_TASK_DETAIL_SAGA,
      taskId: insertComment.taskId,
    });

    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
}

function* deleteCommentTask(action) {
  try {
    const { data, status } = yield call(() =>
      commentService.deleteComment(action.idComment)
    );

    yield put({
      type: GET_TASK_DETAIL_SAGA,
      taskId: action.taskId,
    });
    notifiFuntion("success", "Delete comment successfully !");

    console.log("data", data);
  } catch (error) {
    console.log("error", error);
    notifiFuntion("error", "Delete comment fail !");
  }
}

export function* theoDoiCommentTask() {
  yield takeLatest(GET_COMMENT_SAGA, commentTask);
}
export function* theoDoiInsertCommentTask() {
  yield takeLatest(POST_INSERTCOMMENT_SAGA, insertCommentTask);
}
export function* theoDoiDeleteCommentTask() {
  yield takeLatest(DELETE_COMMENT_SAGA, deleteCommentTask);
}
