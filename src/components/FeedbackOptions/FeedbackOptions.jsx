import { Btn, BtnList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnList>
      {options.map(item => {
        return (
          <li key={item}>
            <Btn type="button" name={item} onClick={onLeaveFeedback}>
              {item}
            </Btn>
          </li>
        );
      })}
    </BtnList>
  );
};
