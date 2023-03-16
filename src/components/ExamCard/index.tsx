// Components
import { Card, CardHeader, CardBody, CardFooter, Text, Box, HStack, Flex, Icon } from '@chakra-ui/react';
import { BellIcon, PeopleIcon, FailedIcon, SlackIcon, StarIcon, SuccessIcon } from '@components/Icons';

// Types
import type { CardProps } from '@chakra-ui/react';

// Enums
import { CARD_STATUS, COLORS } from '@enums';

// Helpers
import { convertPxToRem } from '@helpers';

export interface IExamCard extends CardProps {
  color: string;
  isNew?: boolean;
  status: CARD_STATUS;
  title: string;
  price?: number | string;
  score?: number | string;
  author?: string;
  enroller: number | string;
  dateTime: string;
  maxScore?: string | number;
  order: string | number;
  icon: JSX.Element;
}

const ExamCard = ({
  maxW = '240px',
  title,
  price,
  color = COLORS.CYAN,
  isNew,
  status = CARD_STATUS.INITIAL,
  score,
  maxScore = 100,
  author,
  enroller,
  dateTime,
  order = 1,
  icon = <SlackIcon />,
  ...rest
}: IExamCard) => {
  const renderInitialCard = () => (
    <>
      <HStack
        mb={convertPxToRem(14)}
        mt={convertPxToRem(23)}
      >
        <Icon as={StarIcon} />
        <Text
          fontSize='20px'
          lineHeight='16px'
        >
          {price}
        </Text>
      </HStack>
      <HStack>
        <Icon
          as={PeopleIcon}
          viewBox='16px'
        />
        <Text
          as='b'
          lineHeight='16px'
        >
          {enroller}
        </Text>
        <Text
          lineHeight='16px'
          fontSize='14px'
        >
          already enrolled
        </Text>
      </HStack>
    </>
  );

  const renderFailedCard = () => (
    <>
      {isNew ? (
        <HStack
          pt='10px'
          color={`${COLORS.PINK}.650`}
        >
          <Icon as={BellIcon} />
          <Text>New</Text>
        </HStack>
      ) : null}
      <Box
        pos='absolute'
        bottom='84px'
        right='30px'
        data-testid='failed'
      >
        <Icon as={FailedIcon} />
      </Box>
    </>
  );

  const renderSuccessCard = () => (
    <>
      {isNew ? (
        <HStack
          pt='10px'
          color={`${COLORS.PINK}.650`}
        >
          <Icon as={BellIcon} />
          <Text>New</Text>
        </HStack>
      ) : null}
      <Box
        pos='absolute'
        bottom='84px'
        right='30px'
        data-testid='success'
      >
        <Icon as={SuccessIcon} />
      </Box>
    </>
  );

  const statusMapping = {
    initial: renderInitialCard,
    failed: renderFailedCard,
    success: renderSuccessCard
  };

  const renderFooterInitial = () => (
    <CardFooter
      px={convertPxToRem(30)}
      py={convertPxToRem(15)}
      data-testid='footer-initial'
    >
      <Box
        fontSize='12px'
        lineHeight='14px'
      >
        <Text>Created by</Text>
        <Text as='b'>{author}</Text>
        <Text>{dateTime}</Text>
      </Box>
    </CardFooter>
  );

  const renderFooterResult = () => (
    <CardFooter
      px={convertPxToRem(30)}
      py={convertPxToRem(15)}
      data-testid='footer-result'
    >
      <Box fontSize='12px'>
        <Text>Score:</Text>
        <HStack alignItems='baseline'>
          <Text
            fontSize='24px'
            fontWeight='700'
            lineHeight='29px'
          >
            {score}
          </Text>
          <Text
            fontSize='14px'
            lineHeight='17px'
          >
            /{maxScore}
          </Text>
        </HStack>
        <Text>{dateTime}</Text>
      </Box>
    </CardFooter>
  );

  const footerMapping = {
    initial: renderFooterInitial,
    failed: renderFooterResult,
    success: renderFooterResult
  };

  return (
    <Card
      colorScheme={color}
      h='350px'
      maxW={maxW}
      {...rest}
      pt={convertPxToRem(20)}
      pb={convertPxToRem(26)}
      data-testid='exam-card'
    >
      <CardHeader
        px={convertPxToRem(30)}
        py='0'
      >
        <HStack justify='space-between'>
          <Flex
            bg={COLORS.BLACK}
            color={`${color}.400`}
            w='43px'
            h='43px'
            borderRadius='full'
            align='center'
            justify='center'
            fontSize='25px'
          >
            {order}
          </Flex>
          <Flex
            bg={`${color}.500`}
            w='32px'
            h='32px'
            borderRadius='full'
            align='center'
            justify='center'
            fontSize='25px'
          >
            {icon}
          </Flex>
        </HStack>
      </CardHeader>
      <CardBody
        px={convertPxToRem(30)}
        pb={convertPxToRem(10)}
      >
        <Text
          fontSize='20px'
          lineHeight='25px'
          fontWeight='700'
        >
          {title}
        </Text>

        {statusMapping[status]()}
      </CardBody>
      {footerMapping[status]()}
    </Card>
  );
};

export default ExamCard;
