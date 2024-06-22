import CircularProgress from '@mui/material/CircularProgress';

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <CircularProgress color='secondary'/>
    </div>
  );
};

export default LoadingPage;