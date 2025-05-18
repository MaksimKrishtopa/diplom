import PageDetail from "@/features/post/form/view-post/PageDetail";
import BackButton from "@/shared/components/back-button";
import style from "@/pages/page-detail/style";

const PostPageDetail = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.backButtonWrapper}>
        <BackButton />
      </div>

      <PageDetail />
    </div>
  );
};

export default PostPageDetail;
