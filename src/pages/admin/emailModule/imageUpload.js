import CustomInput from '../../../components/customInput';
import { Button } from '../../../components/button';
import { MdImage } from 'react-icons/md';
const sx = {
  '& .MuiInputBase-input': {
    paddingLeft: 1, // removes padding inside input
  },
  '& .MuiOutlinedInput-root': {
    padding: 0, // removes padding inside outlined input wrapper
  },
}
function ImageUpload() {

  return (
    <div className='w-full bg-white shadow rounded-md p-3 border border-gray-200 grid grid-cols-2 mt-5'>
      <div className='flex flex-col gap-3'>
       
         <CustomInput
          placeholder=""
          sx={sx}
          startIcons={<MdImage  className="text-blue100" size={20} />}
          className=''
          type='file'
        />
        
       
        <div className='flex flex-row gap-3'>
          <Button variant="submit" size="sm">Submit</Button>
          <Button variant="close" size="sm">Cancel</Button>
        </div>
      </div>
    </div>
  )
}

export default ImageUpload
