import CreatePostForm from "@/features/post/form/CreatePostForm";
import { useAuth } from "@/shared/hooks/auth";
import { Navigate } from "react-router-dom";

const CreatePostPage = () => {
    const { session, isLoading } = useAuth();
  
    if (isLoading) return <div>Загрузка...</div>;
    if (!session) return <Navigate to="/login" />;
  
    return (
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Создать пост</h2>
        <CreatePostForm userId={session.user.id} />
      </div>
    );
  };
  

export default CreatePostPage;
