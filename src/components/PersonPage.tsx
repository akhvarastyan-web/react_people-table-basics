import { Person } from '../types/Person';
import { PersonLink } from './PersonLink';
import { useParams } from 'react-router-dom';

interface Props {
  person: Person;
}

export const PersonPage: React.FC<Props> = ({ person }) => {
  const { slug } = useParams();
  const isSelected = person.slug === slug;

  return (
    <tr data-cy="person" className={isSelected ? 'has-background-warning' : ''}>
      <td>
        <PersonLink person={person} />
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        <PersonLink person={person.mother} name={person.motherName} />
        {!person.mother && !person.motherName && '-'}
      </td>
      <td>
        <PersonLink person={person.father} name={person.fatherName} />
        {!person.father && !person.fatherName && '-'}
      </td>
    </tr>
  );
};
