import { useRecoilValue, useSetRecoilState } from "recoil";
import { CommentType } from "src/model/attention";
import { listState } from "src/store/attention.recoil";
import { comment } from "src/apis/Comment";
import { useCallback, useEffect } from "react";

export default function useCommentFetch() {
  const setList = useSetRecoilState<CommentType[]>(listState);
  const list = useRecoilValue(listState);

  const getList = useCallback(() => comment.get(setList), [setList]);

  useEffect(() => {
    getList();
  }, [getList]);

  return {
    list,
  };
}
