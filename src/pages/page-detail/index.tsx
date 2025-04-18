import PageDetail from "@/features/post/form/view-post/PageDetail";
import BackButton from "@/shared/components/back-button";

const PostPageDetail = () => {
  return (
    <div className="relative">
      <div className="absolute top-30 left-100 z-10">
        <BackButton />
      </div>
      
      <PageDetail />
    </div>
  );
};

export default PostPageDetail;
