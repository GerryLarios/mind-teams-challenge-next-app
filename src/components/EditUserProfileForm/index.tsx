import { ProfileResult } from '@/types';

type EditUserProfessionalProfileFormProps = Pick<
  ProfileResult,
  'resume' | 'lenguageLevel' | 'technologies'
>;

const EditUserProfessionalProfileForm: React.FC<EditUserProfessionalProfileFormProps> = ({
  resume,
  lenguageLevel,
  technologies,
}) => {
  return <h1>Edit user information</h1>;
};

export default EditUserProfessionalProfileForm;
