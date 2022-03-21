using System.Threading.Tasks;
using Applicaiton.Interfaces;
using Application.Photos;
using Microsoft.AspNetCore.Http;

namespace Infrasture.Photos
{
    public class PhotoAccessor : IPhotoAccessor
    {
        public Task<PhotoUploadResult> AddPhoto(IFormFile file)
        {
            throw new System.NotImplementedException();
        }

        public Task<string> DeletePhoto(string publicId)
        {
            throw new System.NotImplementedException();
        }
    }
}