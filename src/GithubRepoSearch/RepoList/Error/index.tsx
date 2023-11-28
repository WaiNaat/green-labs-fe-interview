import useResetErrorBoundary from '../../../ErrorBoundary/hooks/useResetErrorBoundary';
import { Button, Imoticon, Section, Text, Title } from './Error.style';

const Error = () => {
  const reset = useResetErrorBoundary();

  return (
    <Section>
      <Imoticon>😭</Imoticon>
      <Title>자료를 불러오는 데 실패했어요</Title>
      <Text>인터넷 연결을 확인하거나 잠시 후에 시도해 주세요.</Text>
      <Button type="button" onClick={reset}>
        다시하기
      </Button>
    </Section>
  );
};

export default Error;
