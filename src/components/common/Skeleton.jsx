export const ProductCardSkeleton = () => {
  return (
    <div className="bg-f9f9f9 border flex flex-col animate-pulse">
      <div className="bg-f1f1f1 w-[300px] aspect-square"></div>
      <div className="m-2 space-y-2">
        <div className="bg-f1f1f1 py-[26px] w-full animate-pulse"></div>
      </div>
    </div>
  );
};

export const GallerySkeleton = () => {
  return <div className="bg-f1f1f1 w-52 aspect-square animate-pulse"></div>;
};
