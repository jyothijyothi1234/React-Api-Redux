import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPhotosData } from './actions';

const PhotoList = ({ photos, loading, error, fetchPhotos }) => {
  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  photos: state.photoReducer.photos,
  loading: state.photoReducer.loading,
  error: state.photoReducer.error,
});

export default connect(mapStateToProps, { fetchPhotos: fetchPhotosData })(PhotoList);
