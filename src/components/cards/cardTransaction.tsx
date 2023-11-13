import { Card, Stack, CardBody, Heading, CardFooter, Button ,Image,Text, Box, Flex} from "@chakra-ui/react"



const CardPay = () => {
    return(
        
        <Box>
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  bg={"#F6DADA"}
  w={"524px"}
  h={"242px"}
  borderRadius={"10px"}
 
>
    <Flex>
        {/* pict order */}
        <Box>
        <Image
    objectFit='cover'
   w={"80px"}
   h={"97px"}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

        </Box>
        {/* title order */}
        <Box>
        <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
        </Box>
        {/* icon */}
        <Box>
<Box>
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
  <path d="M23.765 1.06211C15.2874 1.49613 7.62948 6.4185 3.70471 13.9556C1.41585 18.3522 0.571279 23.3769 1.281 28.3345C2.5585 37.2407 8.86794 44.7389 17.4733 47.5794C19.2654 48.1722 21.0716 48.5392 23.066 48.7191C24.0276 48.8038 26.0787 48.8038 27.0404 48.7191C29.0347 48.5392 30.841 48.1722 32.633 47.5794C38.5592 45.6246 43.5166 41.4079 46.4016 35.868C49.3612 30.18 49.8864 23.4757 47.8495 17.3747C45.4719 10.2541 39.7941 4.60834 32.633 2.24419C29.7977 1.30912 26.7814 0.906857 23.765 1.06211ZM27.1469 1.28442C29.198 1.47849 30.9084 1.8384 32.7537 2.46296C36.8914 3.86381 40.5571 6.37263 43.3782 9.7389C46.2845 13.2004 48.1405 17.4312 48.7047 21.8596C48.8573 23.0522 48.8821 23.4933 48.8821 24.9118C48.8821 26.3303 48.8573 26.7714 48.7047 27.964C47.9524 33.8815 44.929 39.3225 40.2413 43.1969C34.7515 47.7347 27.4201 49.566 20.3513 48.1616C13.765 46.856 8.01982 42.8123 4.55283 37.036C2.71109 33.9697 1.60747 30.5399 1.27745 26.8525C1.21358 26.1327 1.19229 24.4037 1.23842 23.6239C1.61102 17.2654 4.3754 11.5314 9.11989 7.26536C12.6721 4.07552 17.2427 1.9866 21.9836 1.3938C22.5656 1.32323 22.9063 1.29147 23.8999 1.2209C24.347 1.18914 26.6004 1.23502 27.1469 1.28442Z" fill="#BD0707"/>
  <path d="M23.7757 2.65001C15.0319 3.14754 7.40239 8.64507 4.17315 16.7714C3.41375 18.6839 2.9134 20.8151 2.70758 23.0064C2.62596 23.9132 2.62596 25.9104 2.70758 26.8173C3.13341 31.3868 4.83675 35.5576 7.68274 39.0085C11.281 43.3698 16.2775 46.1821 21.8595 46.9796C23.0128 47.1454 23.6941 47.1913 25.0532 47.1913C26.6891 47.1913 27.8673 47.0854 29.3293 46.8031C36.4549 45.4341 42.5266 40.6458 45.5145 34.0438C46.5294 31.8031 47.1575 29.3825 47.3988 26.8173C47.4805 25.9104 47.4805 23.9132 47.3988 23.0064C47.225 21.1504 46.8701 19.4708 46.2952 17.7664C44.6558 12.9252 41.352 8.76504 36.9766 6.02686C33.0518 3.57096 28.4173 2.38536 23.7757 2.65001ZM25.5465 4.85184C26.6394 4.90477 26.8985 4.93653 27.2037 5.04944C27.6614 5.21881 27.8566 5.49404 27.8566 5.96687C27.8566 6.41853 27.6934 6.65495 27.2711 6.82785L27.083 6.90195L27.2498 6.96193C27.4663 7.03603 27.7218 7.26186 27.8176 7.45593C27.9205 7.66412 27.9205 8.07344 27.8211 8.34161C27.7253 8.58861 27.4805 8.81797 27.2072 8.92382C26.8524 9.05438 26.5223 9.0685 25.2484 9.00851C24.6061 8.98028 24.0702 8.94852 24.0631 8.94147C24.049 8.92735 24.1732 6.00922 24.2264 5.15883L24.2477 4.79891H24.3754C24.4464 4.79891 24.9716 4.82361 25.5465 4.85184ZM22.374 5.15883L22.5159 5.2047L22.5266 5.7481L22.5372 6.28797L22.4024 6.26327C21.8949 6.168 21.4939 6.15036 21.1178 6.21387C20.7984 6.26327 20.6884 6.32679 20.6884 6.45734C20.6884 6.63025 20.7878 6.66553 21.4585 6.72199C21.8204 6.75375 22.1469 6.79962 22.2853 6.84196C22.9098 7.03603 23.2008 7.44535 23.1653 8.08049C23.1441 8.42276 23.0482 8.63095 22.7856 8.8956C22.2569 9.41782 21.061 9.67894 20.0639 9.4884L19.8829 9.45311L19.858 8.92382C19.8438 8.63095 19.8403 8.38395 19.8509 8.37336C19.8616 8.36278 19.9964 8.37336 20.1455 8.40159C20.5784 8.47922 21.2207 8.46511 21.5259 8.36983C21.8098 8.28162 21.8701 8.23222 21.8524 8.09108C21.8382 7.94641 21.7388 7.91818 21.0752 7.85466C20.1845 7.76998 19.8084 7.62178 19.5635 7.25833C19.4109 7.03251 19.3612 6.84902 19.3612 6.52439C19.3577 6.02686 19.638 5.63519 20.1739 5.38113C20.3903 5.2788 20.8658 5.15177 21.203 5.10237C21.4159 5.07061 22.2356 5.10943 22.374 5.15883ZM30.3477 5.49051C30.6778 5.5999 30.9439 5.6987 30.9439 5.71281C30.9439 5.7234 30.7594 6.27386 30.5358 6.93018C30.1916 7.93935 30.1277 8.16165 30.1277 8.34161C30.1277 8.48981 30.149 8.59214 30.1952 8.66624C30.2874 8.81444 30.5571 8.94147 30.7913 8.945C30.9475 8.945 30.99 8.93088 31.0894 8.83914C31.242 8.69447 31.3023 8.54626 31.7388 7.24069C31.9482 6.61613 32.1327 6.10449 32.1469 6.10449C32.1824 6.10449 33.3108 6.48204 33.3534 6.50674C33.396 6.53497 32.5763 8.94147 32.4237 9.22375C31.9588 10.0988 30.9581 10.3211 29.8296 9.79538C29.0383 9.42841 28.6692 8.83208 28.7757 8.10519C28.8218 7.81232 29.6664 5.29291 29.7196 5.29291C29.7374 5.29291 30.0213 5.38113 30.3477 5.49051ZM17.9524 7.50533L17.8815 8.9944L18.2221 9.66483C18.4067 10.0353 18.5592 10.3458 18.5592 10.3564C18.5592 10.3741 17.4414 10.9386 17.4059 10.9386C17.3953 10.9386 17.2356 10.6317 17.0546 10.2541L16.7246 9.57308L15.4968 8.72975C14.819 8.26751 14.2654 7.87936 14.2654 7.86878C14.2654 7.84408 15.4258 7.26892 15.4755 7.26892C15.4968 7.26892 15.7807 7.47358 16.1071 7.72058C16.4336 7.97111 16.7175 8.18635 16.7424 8.20046C16.7778 8.22163 16.7885 8.06285 16.7814 7.42065L16.7743 6.61613L17.3917 6.31267C17.7324 6.14683 18.0128 6.00922 18.0128 6.01274C18.0163 6.01627 17.9879 6.6867 17.9524 7.50533ZM36.1426 8.12989C36.7814 8.34513 37.4769 8.88501 37.8282 9.44252L37.8992 9.55191L37.5337 9.8095C37.335 9.95417 37.1221 10.1059 37.0617 10.1518L36.9482 10.2365L36.8417 10.0494C36.6927 9.78127 36.3839 9.48487 36.1213 9.35431C35.8481 9.22022 35.5571 9.20611 35.3087 9.31902C35.1064 9.41077 34.858 9.67188 34.7232 9.93653C34.6345 10.1094 34.6167 10.1871 34.6167 10.4094C34.6167 10.6387 34.6309 10.6987 34.7161 10.8434C34.9042 11.1609 35.3477 11.415 35.8658 11.5067C35.9971 11.5314 36.1107 11.5526 36.1142 11.5561C36.1249 11.5632 35.7381 12.6041 35.7168 12.6288C35.6778 12.6641 35.2342 12.5265 34.929 12.3854C33.4634 11.7008 32.9134 10.5434 33.506 9.37195C33.8467 8.69799 34.3754 8.23222 34.9893 8.06285C35.2874 7.98169 35.7878 8.01345 36.1426 8.12989ZM15.3584 10.6528C15.951 11.0092 16.4301 11.3127 16.423 11.3268C16.4159 11.3409 16.1994 11.5314 15.9404 11.7502C15.6139 12.0219 15.4507 12.1384 15.4116 12.1242C15.3797 12.1101 15.2235 12.0219 15.0603 11.9266C14.9006 11.8278 14.7587 11.7502 14.748 11.7502C14.7196 11.7502 13.7615 12.5547 13.7189 12.6147C13.6976 12.6429 13.7367 12.7806 13.8396 13.017C13.9673 13.324 13.9851 13.3839 13.9425 13.4263C13.726 13.6345 13.0021 14.2132 12.9844 14.192C12.9489 14.1532 11.3804 10.1271 11.3946 10.113C11.4017 10.1059 11.6927 9.86243 12.0404 9.56955L12.6756 9.04027L13.4776 9.52368C13.9212 9.78833 14.7658 10.2964 15.3584 10.6528ZM39.67 11.0127L40.0958 11.5138L39.4428 12.0643C39.0844 12.3677 38.8041 12.6182 38.8218 12.6253C38.836 12.6324 39.2654 12.5865 39.7764 12.53C40.2839 12.47 40.7381 12.4206 40.7878 12.4206C40.8694 12.4206 40.9546 12.5089 41.7601 13.4545C41.7885 13.4863 41.8062 13.5216 41.7991 13.5286C41.792 13.5357 41.2313 13.578 40.55 13.6239L39.3186 13.7051L39.2832 13.8286C39.2654 13.8991 39.1306 14.4461 38.9815 15.0494C38.836 15.6493 38.7047 16.1715 38.687 16.2033C38.6693 16.2492 38.5557 16.1362 38.1618 15.6775L37.665 15.0918L37.9418 14.1214C38.0979 13.5886 38.215 13.1475 38.2079 13.1369C38.1973 13.1299 37.9098 13.3663 37.5621 13.6592C37.0972 14.0544 36.9198 14.1885 36.8843 14.1638C36.8559 14.1461 36.6607 13.9274 36.4443 13.6733L36.0539 13.2181L36.1497 13.1228C36.2846 12.9958 39.2122 10.5152 39.2299 10.5152C39.237 10.5152 39.4357 10.741 39.67 11.0127ZM26.7211 10.9916C29.3257 11.3056 31.714 12.2583 33.7651 13.8003C34.8722 14.6295 36.061 15.8504 36.8595 16.976C38.0695 18.6803 38.8822 20.5999 39.2619 22.6535C39.4393 23.6027 39.4783 24.072 39.4783 25.247C39.4783 26.6973 39.3719 27.5653 39.0348 28.8462C38.3676 31.415 37.0795 33.6133 35.1455 35.4976C32.814 37.7664 29.9929 39.1038 26.6856 39.5096C25.9581 39.5978 24.1838 39.5978 23.4563 39.5096C20.951 39.2026 18.7509 38.3663 16.7494 36.9655C15.6281 36.1821 14.3896 34.9895 13.5663 33.8991C11.9943 31.8278 11.0575 29.499 10.7274 26.8525C10.6813 26.4609 10.6636 26.0833 10.6636 25.247C10.6636 24.4108 10.6813 24.0332 10.7274 23.6415C11.0184 21.3056 11.7885 19.1991 13.034 17.343C13.648 16.4256 14.1944 15.7763 15.0319 14.9612C17.4911 12.5724 20.5713 11.2068 24.1128 10.9245C24.5351 10.8928 26.2633 10.9351 26.7211 10.9916ZM11.0042 13.3063C11.8133 14.1426 12.4769 14.8377 12.484 14.8518C12.4876 14.866 12.3314 15.1412 12.1362 15.4588C11.8701 15.8928 11.7636 16.0339 11.7175 16.0233C11.6856 16.0198 11.1001 15.8398 10.4152 15.6281C9.73384 15.4199 9.17315 15.2506 9.16606 15.2541C9.16251 15.2612 9.58124 15.6987 10.0958 16.2315C10.6991 16.8561 11.0291 17.2195 11.0149 17.2548C10.9759 17.3571 10.3442 18.3557 10.3087 18.3698C10.2697 18.3839 6.25619 17.1701 6.21716 17.1313C6.19941 17.1172 6.44427 16.7008 6.81332 16.1186L6.93753 15.921L8.07308 16.415C8.69764 16.6867 9.24767 16.9231 9.29736 16.9408C9.34704 16.9619 8.96024 16.5491 8.43859 16.0304C7.9134 15.5082 7.48756 15.0706 7.48756 15.053C7.48756 15.0106 8.23987 13.7968 8.26471 13.7968C8.2789 13.7968 8.86088 13.9873 9.5635 14.2202C10.3974 14.4955 10.8162 14.619 10.77 14.5766C10.731 14.5413 10.2697 14.1602 9.74803 13.7298C9.08799 13.1863 8.80055 12.9288 8.81474 12.8935C8.85023 12.7982 9.48543 11.7855 9.51027 11.7855C9.52092 11.7855 10.1952 12.47 11.0042 13.3063ZM42.4911 15.2047C43.105 15.5046 43.6444 16.5314 43.7367 17.5759L43.7615 17.8405L43.2647 17.9711C42.9915 18.0417 42.7431 18.1017 42.7147 18.1017C42.6756 18.1017 42.6614 18.024 42.6437 17.7735C42.6189 17.3995 42.5195 16.9902 42.3847 16.6902C42.2711 16.4362 42.1966 16.3621 42.0617 16.3797C41.902 16.3974 41.8843 16.5561 41.9766 17.0819C42.0191 17.3218 42.0617 17.6147 42.0724 17.7347C42.1185 18.1863 41.9517 18.6909 41.6856 18.8921C41.4975 19.0367 41.1923 19.1602 40.9617 19.1814C40.4223 19.2379 39.8829 18.8921 39.4961 18.2463C39.2015 17.7523 38.946 16.8949 38.9709 16.475L38.9815 16.288L39.4783 16.1539C39.7516 16.0798 39.9822 16.0198 39.9929 16.0198C40.0035 16.0198 40.0319 16.1962 40.0532 16.4079C40.1064 16.8843 40.2093 17.2795 40.3619 17.5724C40.5039 17.8547 40.6281 17.9535 40.7523 17.897C40.802 17.8758 40.8516 17.8158 40.8658 17.7664C40.8765 17.717 40.8516 17.4524 40.8091 17.1772C40.7062 16.5314 40.7062 16.1045 40.8126 15.8293C41.0539 15.1835 41.8488 14.8871 42.4911 15.2047ZM6.29523 25.4623C6.68912 25.5646 7.20367 25.8681 7.51595 26.1892L7.66499 26.3444L7.46272 26.4044C7.17528 26.4926 6.79558 26.6832 6.56492 26.8561C6.45846 26.9372 6.36975 26.9902 6.36265 26.969C6.35555 26.9513 6.29168 26.8384 6.21716 26.7149C5.9723 26.3021 5.54292 25.9739 5.03902 25.8116C4.93256 25.7763 4.82965 25.7375 4.81191 25.7234C4.77997 25.6916 4.98224 25.554 5.16322 25.4835C5.4613 25.3635 5.88359 25.3564 6.29523 25.4623ZM44.9503 25.4623C45.1632 25.5329 45.4045 25.6846 45.3655 25.7234C45.3477 25.7375 45.2448 25.7763 45.1384 25.8116C44.6345 25.9739 44.2051 26.3021 43.9602 26.7149C43.8857 26.8384 43.8218 26.9513 43.8147 26.969C43.8076 26.9902 43.7189 26.9372 43.6125 26.8561C43.3818 26.6832 43.0021 26.4926 42.7147 26.4044L42.5124 26.3444L42.6614 26.1892C43.0624 25.7799 43.6409 25.4799 44.198 25.3952C44.3754 25.367 44.7693 25.4023 44.9503 25.4623ZM4.84739 26.0551C5.42936 26.2527 5.79842 26.5385 6.01489 26.969L6.13909 27.2125L5.9794 27.3889C5.74164 27.6535 5.50743 28.0452 5.37968 28.4051L5.26613 28.7262L5.07095 28.5216C4.42511 27.8441 4.15896 26.969 4.38962 26.2915C4.4464 26.1221 4.53511 25.9704 4.57415 25.9704C4.58834 25.9704 4.71254 26.0092 4.84739 26.0551ZM45.731 26.1539C46.061 26.8102 45.802 27.7947 45.1064 28.5216L44.9113 28.7262L44.7977 28.4051C44.67 28.0452 44.4357 27.6535 44.198 27.3889L44.0383 27.2125L44.1625 26.969C44.308 26.6796 44.6061 26.3762 44.8935 26.235C45.1242 26.1151 45.5287 25.9739 45.5961 25.981C45.6245 25.9845 45.6849 26.0621 45.731 26.1539ZM8.77571 26.722C8.88572 26.7714 8.97798 26.8278 8.97798 26.8455C8.97798 26.9231 8.75442 27.5159 8.66925 27.6606C8.43859 28.0593 7.99856 28.3628 7.48046 28.4898C7.15754 28.5674 6.90914 28.6803 6.65719 28.8674C6.30587 29.1285 6.10715 29.4425 5.87649 30.0812L5.85165 30.1518L5.79487 30.0812C5.54292 29.7566 5.46485 29.1779 5.60325 28.6733C5.73809 28.1828 5.99359 27.777 6.40878 27.3783C6.79913 27.0078 7.10076 26.8278 7.55853 26.6867C7.93824 26.5703 8.47763 26.5844 8.77571 26.722ZM42.5798 26.6761C43.0305 26.8031 43.3712 27.0007 43.7686 27.3783C44.1838 27.777 44.4393 28.1828 44.5741 28.6733C44.7125 29.1779 44.6345 29.7566 44.3825 30.0812L44.3257 30.1518L44.3009 30.0812C44.0702 29.4425 43.8715 29.1285 43.5202 28.8674C43.2683 28.6803 43.0199 28.5674 42.6969 28.4898C42.1788 28.3628 41.7388 28.0593 41.5081 27.6606C41.423 27.5194 41.1994 26.9266 41.1994 26.8455C41.1994 26.8067 41.4585 26.6796 41.6146 26.6444C41.863 26.5844 42.303 26.602 42.5798 26.6761ZM9.42865 27.3712C9.91127 28.3981 9.07734 29.9471 7.77145 30.4482C7.40949 30.5893 6.98721 30.6458 6.70332 30.5964C6.43717 30.5505 6.08941 30.3988 6.1107 30.3388C6.12134 30.3141 6.17103 30.1624 6.22425 30C6.34491 29.6437 6.55073 29.3261 6.78848 29.1391C7.03334 28.9485 7.17173 28.885 7.56208 28.7756C7.98792 28.6556 8.20083 28.5533 8.45988 28.3451C8.73313 28.1264 8.96733 27.7806 9.11992 27.3783C9.25477 27.0149 9.25832 27.0149 9.42865 27.3712ZM41.0575 27.3818C41.2101 27.7806 41.4443 28.1264 41.7175 28.3451C41.9766 28.5533 42.1895 28.6556 42.6153 28.7756C43.0057 28.885 43.1441 28.9485 43.3889 29.1391C43.6267 29.3261 43.8325 29.6437 43.9531 30C44.0064 30.1624 44.056 30.3141 44.0667 30.3388C44.088 30.3988 43.7402 30.5505 43.4741 30.5964C43.1902 30.6458 42.7679 30.5893 42.4059 30.4482C41.6394 30.1553 40.9723 29.4531 40.7133 28.6698C40.5997 28.3204 40.5855 27.7841 40.6813 27.523C40.7381 27.3783 40.9049 27.0643 40.9297 27.0643C40.9368 27.0643 40.9936 27.2054 41.0575 27.3818ZM35.6032 38.0911C35.7558 38.3134 35.8765 38.5074 35.8765 38.5251C35.8765 38.5392 35.5252 38.7897 35.0958 39.0755C34.6664 39.3649 34.308 39.6119 34.2974 39.626C34.2867 39.6436 34.4712 39.9542 34.5493 40.0459C34.5564 40.053 34.8155 39.8942 35.1206 39.6895C35.4294 39.4884 35.7239 39.2943 35.7736 39.2626L35.8658 39.2026L36.1355 39.6084C36.2881 39.8307 36.4088 40.0283 36.4088 40.0424C36.4088 40.06 36.1426 40.2541 35.8162 40.4729C35.4861 40.6916 35.2058 40.8857 35.1881 40.8998C35.1419 40.9422 35.4223 41.3585 35.4826 41.3374C35.5074 41.3268 35.8694 41.0904 36.2881 40.8081C36.7033 40.5258 37.0582 40.2964 37.0759 40.2964C37.1043 40.2964 37.6508 41.0833 37.6508 41.1221C37.6508 41.1433 35.0248 42.9111 34.9716 42.9288C34.9397 42.9393 32.665 39.6189 32.6402 39.5237C32.6295 39.4919 35.2484 37.6923 35.3123 37.6888C35.3229 37.6853 35.4542 37.8688 35.6032 38.0911ZM15.3832 38.1616C15.9049 38.2957 16.5756 38.7227 16.9553 39.1638C17.1966 39.439 17.3314 39.6472 17.2995 39.693C17.2782 39.7319 16.4123 40.3317 16.3839 40.3317C16.3733 40.3317 16.3165 40.2435 16.2562 40.1377C16.1071 39.8765 15.7736 39.5519 15.5358 39.4355C15.2839 39.312 14.9858 39.3049 14.7374 39.4143C14.4074 39.559 14.0738 40.0247 14.0277 40.4023C13.9922 40.6916 14.0702 40.8822 14.3151 41.1257C14.567 41.3762 14.8367 41.5138 15.2164 41.5914C15.3655 41.6232 15.4968 41.6549 15.5003 41.6585C15.5074 41.662 15.4223 41.9055 15.3087 42.1983C15.149 42.6112 15.0887 42.7312 15.039 42.7312C14.9361 42.7312 14.4145 42.53 14.1625 42.3924C13.2221 41.8808 12.704 41.1715 12.7005 40.3988C12.6969 40.0318 12.7608 39.7848 12.956 39.4108C13.286 38.7827 13.8218 38.3134 14.3825 38.1616C14.6309 38.0981 15.1242 38.0946 15.3832 38.1616ZM32.374 40.2329C32.4663 40.487 32.5301 40.7058 32.5159 40.7199C32.5018 40.734 32.0937 40.8928 31.6111 41.0727C31.1249 41.2527 30.731 41.415 30.731 41.4362C30.731 41.5032 30.8836 41.8843 30.9084 41.8843C30.9226 41.8843 31.1071 41.8208 31.3201 41.7396C31.533 41.6585 31.8524 41.542 32.0298 41.4785L32.3563 41.3621L32.5372 41.8384C32.6366 42.1031 32.7147 42.3218 32.7111 42.3254C32.704 42.3289 32.3882 42.4489 32.0085 42.59C31.6288 42.7312 31.3059 42.8582 31.2881 42.8688C31.2491 42.9076 31.4265 43.3487 31.4833 43.3451C31.5081 43.3416 31.9269 43.1934 32.4095 43.0134C32.8921 42.8335 33.2931 42.6923 33.3002 42.6994C33.3215 42.7312 33.6409 43.6027 33.6409 43.6345C33.6409 43.6803 30.6245 44.7918 30.5891 44.7566C30.5749 44.7389 30.2377 43.8674 29.8474 42.8194C29.2938 41.3515 29.1412 40.9069 29.1767 40.8857C29.2335 40.8469 32.1185 39.7707 32.1682 39.7707C32.1895 39.7671 32.2817 39.9753 32.374 40.2329ZM19.2228 40.1553C19.9503 40.3282 20.5678 40.7728 20.8516 41.3268C21.1284 41.8667 21.0894 42.6429 20.7594 43.2957C20.2945 44.2096 19.3932 44.6436 18.3889 44.439C17.6295 44.2837 16.9659 43.8215 16.682 43.2463C16.5401 42.9605 16.5046 42.777 16.501 42.3924C16.4975 41.2809 17.2817 40.2753 18.2754 40.1094C18.5167 40.0706 18.9531 40.0918 19.2228 40.1553ZM28.8112 41.3091C28.8325 41.482 28.8609 41.7149 28.8715 41.8349L28.8928 42.0466L27.9773 42.1595C27.4698 42.223 27.0511 42.2724 27.0404 42.2724C27.0298 42.2724 27.0333 42.3995 27.0546 42.5547C27.0937 42.8899 27.0014 42.8688 27.9098 42.7523C28.2612 42.7065 28.5521 42.6712 28.5557 42.6747C28.577 42.6923 28.6834 43.6839 28.6657 43.7015C28.6551 43.7121 28.3321 43.7615 27.9418 43.8109C27.555 43.8603 27.2356 43.9026 27.2321 43.9062C27.225 43.9097 27.2604 44.2167 27.3101 44.5837C27.3563 44.9542 27.3917 45.2788 27.3847 45.307C27.3776 45.3458 27.2356 45.3776 26.7565 45.4376C26.4159 45.4799 26.1249 45.5011 26.1142 45.4905C26.0859 45.4552 25.582 41.4185 25.6032 41.3974C25.6245 41.3727 28.4457 41.0127 28.6409 41.0057L28.7686 41.0022L28.8112 41.3091ZM23.5734 41.2633C24.4109 41.3515 25.1029 41.4291 25.1135 41.4397C25.1384 41.4644 25.0497 42.4242 25.0213 42.4559C25.0071 42.4736 24.6061 42.4453 24.1306 42.3959C23.6515 42.3465 23.2363 42.3077 23.2008 42.3077C23.1547 42.3077 23.137 42.3607 23.1192 42.5724C23.105 42.7206 23.1015 42.8476 23.1086 42.8582C23.1192 42.8652 23.4421 42.9041 23.8325 42.9464C24.2193 42.9852 24.5422 43.024 24.5493 43.0311C24.5635 43.0452 24.4606 44.0403 24.4428 44.0579C24.4358 44.0614 24.1199 44.0367 23.7438 43.9979C23.3641 43.9591 23.0376 43.9344 23.0128 43.9415C22.9879 43.952 22.9489 44.2202 22.9098 44.6401C22.8708 45.0177 22.8318 45.3353 22.8211 45.3494C22.7927 45.3811 21.604 45.2717 21.5614 45.2329C21.5436 45.2153 21.6146 44.3684 21.7353 43.1546C21.9127 41.4185 21.9517 41.108 22.0014 41.108C22.0298 41.108 22.7395 41.1786 23.5734 41.2633Z" fill="#BD0707"/>
  <path d="M25.4648 6.16796C25.4542 6.37262 25.4471 6.54199 25.4506 6.54905C25.4613 6.55963 26.0078 6.57022 26.1781 6.56669C26.2491 6.56316 26.3342 6.52788 26.4017 6.46436C26.4904 6.38673 26.5117 6.34086 26.5152 6.22089C26.5188 5.91743 26.391 5.8398 25.8126 5.81157L25.4897 5.79746L25.4648 6.16796Z" fill="#BD0707"/>
  <path d="M25.4081 7.45236C25.4081 7.53705 25.3974 7.70994 25.3832 7.8405L25.3619 8.08044H25.8304C26.3875 8.08044 26.4833 8.04869 26.5472 7.83344C26.6004 7.65702 26.5401 7.49823 26.3875 7.4206C26.2988 7.37473 25.8304 7.31475 25.4719 7.30769C25.4223 7.30416 25.4081 7.33592 25.4081 7.45236Z" fill="#BD0707"/>
  <path d="M12.6827 10.3952C12.8637 10.868 13.2221 11.6796 13.2434 11.6726C13.2895 11.6549 13.8715 11.1715 13.875 11.1468C13.875 11.1327 13.6018 10.9457 13.2682 10.7304C12.9346 10.5117 12.6685 10.3635 12.6827 10.3952Z" fill="#BD0707"/>
  <path d="M24.3257 11.7361C24.2476 11.7431 23.9851 11.7678 23.7402 11.789C22.1824 11.9196 20.4435 12.4171 18.9673 13.1546C17.5869 13.8391 16.1604 14.9012 15.1384 16.0021C13.0589 18.2428 11.8452 20.9069 11.5259 23.9238C11.4691 24.4848 11.4691 25.9986 11.5259 26.5702C11.8381 29.5695 13.0624 32.2583 15.1348 34.4884C16.1745 35.6069 17.5798 36.6514 19.0063 37.3606C20.3832 38.0452 21.9162 38.4968 23.5628 38.698C24.276 38.7827 25.8587 38.7827 26.5791 38.6944C29.5138 38.3416 32.012 37.2195 34.2228 35.2576C35.3868 34.2237 36.5117 32.7488 37.2533 31.2774C37.9666 29.8624 38.4421 28.2216 38.616 26.5702C38.6763 26.0021 38.6763 24.4919 38.616 23.9238C38.2256 20.2082 36.4371 16.9619 33.4847 14.6154C33.1192 14.3261 32.2072 13.7121 31.7778 13.4721C30.1774 12.5723 28.3073 11.9795 26.4549 11.7855C26.0858 11.7467 24.5741 11.7114 24.3257 11.7361ZM29.5493 15.5046C30.0106 15.6281 30.4151 15.8822 30.8232 16.3126C31.2633 16.7749 31.5117 17.3042 31.5117 17.7805C31.5081 18.3063 31.2029 18.5956 30.6529 18.5956C29.5741 18.5921 28.2789 17.2442 28.364 16.2103C28.4102 15.621 28.8963 15.3317 29.5493 15.5046ZM17.303 18.3522C17.6259 18.451 18.0979 18.6909 18.3782 18.8956C18.6408 19.0896 18.9389 19.3578 18.9886 19.446C19.017 19.5025 18.8538 19.7671 18.4244 20.3564L18.3605 20.4411L18.1334 20.2047C17.484 19.5307 16.8417 19.3331 16.2384 19.6119C15.5393 19.9365 15.1774 20.868 15.4009 21.7572C15.5429 22.3148 15.9829 22.9887 16.462 23.3769C16.6252 23.511 16.6785 23.5709 16.6643 23.6239C16.6252 23.8074 16.3023 24.6542 16.2704 24.6613C16.2136 24.6754 15.7948 24.3508 15.4755 24.0473C14.6593 23.2675 14.1589 22.2124 14.1589 21.2562C14.1589 20.6987 14.3257 20.1094 14.6238 19.6083C14.8083 19.3014 15.3584 18.7262 15.621 18.5674C16.1462 18.2534 16.7352 18.1793 17.303 18.3522ZM21.7281 18.7862C24.1447 19.5907 27.9737 22.7523 30.7416 26.2244C30.8907 26.4114 31.0149 26.5808 31.0149 26.5985C31.0149 26.6514 30.3903 26.9443 30.0177 27.0678C29.2512 27.3218 28.506 27.41 27.6685 27.3465C26.3413 27.2477 25.7132 26.9937 25.4116 26.4326C25.2271 26.0868 25.1951 25.8575 25.1596 24.6295C25.1348 23.7156 25.1171 23.4545 25.0532 23.1687C24.9254 22.5723 24.7125 22.1419 24.3328 21.6973C23.5273 20.7587 22.3385 20.18 21.0823 20.1165L20.6423 20.0953L20.5784 19.9083C20.4897 19.6507 20.4258 19.199 20.4542 19.0473C20.479 18.9026 20.5926 18.7474 20.7026 18.698C20.8445 18.638 21.43 18.6874 21.7281 18.7862ZM19.9041 20.2894C20.6742 22.59 23.6231 26.2244 26.9694 29.005C28.6976 30.4411 30.369 31.4785 31.5826 31.8772L32.0298 32.0219L31.8736 32.1419C31.1249 32.7029 29.9893 33.3945 29.056 33.8568C27.3385 34.7071 25.8587 35.1165 24.3257 35.1694C23.3463 35.2011 22.6082 35.0988 21.7565 34.8201C19.9041 34.2096 18.1902 32.6994 17.2959 30.8927C16.7672 29.8271 16.5401 28.7262 16.5826 27.47C16.6181 26.482 16.7636 25.7198 17.122 24.6472C17.452 23.6556 17.8282 22.8335 18.4031 21.8384C18.7792 21.1786 19.709 19.7954 19.748 19.8377C19.7516 19.8412 19.8225 20.0459 19.9041 20.2894ZM33.7863 20.614C34.7125 21.0727 35.3229 22.0713 35.5819 23.5533C35.66 23.9979 35.6706 25.4129 35.5997 25.9704C35.5252 26.5596 35.3548 27.35 35.1987 27.8335C34.7835 29.0967 34.2335 30.0353 33.4102 30.8645C33.0127 31.2668 32.9737 31.295 32.814 31.3162C32.4024 31.3762 31.7601 31.1891 30.8729 30.7481C30.5429 30.5822 30.2696 30.4376 30.2696 30.4234C30.2696 30.4093 30.44 30.3458 30.6494 30.2823C31.1604 30.1235 31.6288 29.9012 32.0972 29.5907C32.4982 29.3261 33.0766 28.8144 33.2576 28.5674C33.4705 28.2745 33.3286 27.9464 32.9843 27.9464C32.8282 27.9464 32.814 27.957 32.4946 28.271C31.7636 29.005 30.8978 29.4884 29.9609 29.6895C29.2512 29.8448 29.347 29.8624 28.8325 29.4884C28.3818 29.1637 27.4343 28.4192 27.1646 28.1793L27.0227 28.0522L27.2888 28.0805C27.4343 28.0946 27.8743 28.1052 28.2647 28.1052C28.8573 28.1016 29.0418 28.0911 29.3754 28.024C30.4826 27.8052 31.5578 27.283 32.232 26.6443C32.5869 26.3056 32.8176 26.0021 33.034 25.5822C33.4315 24.8095 33.5734 23.9803 33.4457 23.1475C33.3711 22.6464 33.2789 22.3783 32.9595 21.7431C32.7182 21.2668 32.665 21.1327 32.6543 20.9633C32.6366 20.7128 32.6721 20.6387 32.8672 20.5399C33.105 20.4199 33.4457 20.4446 33.7863 20.614ZM21.5755 20.928C22.633 21.1186 23.6728 21.8525 24.0986 22.7064C24.3257 23.1616 24.3789 23.4968 24.4002 24.5942L24.418 25.5293L24.0915 25.1941C23.4102 24.4919 22.6046 23.4721 21.9091 22.4241C21.5613 21.8949 20.9723 20.921 20.9723 20.868C20.9723 20.8469 21.2952 20.8786 21.5755 20.928Z" fill="black"/>
  <path d="M28.8715 15.7798C28.6905 15.8857 28.6018 16.0551 28.6018 16.295C28.6018 16.9619 29.276 17.844 30.0745 18.2146C30.298 18.3169 30.3548 18.3275 30.6494 18.331C30.9474 18.331 30.9829 18.3239 31.0681 18.2428C31.2136 18.1087 31.2633 17.9852 31.2633 17.7558C31.2633 17.1172 30.6316 16.2703 29.8651 15.8927C29.5919 15.7587 29.4996 15.7304 29.276 15.7163C29.0418 15.7022 28.9922 15.7093 28.8715 15.7798Z" fill="black"/>
  <path d="M16.501 18.5145C16.1142 18.5568 15.7523 18.7438 15.3939 19.0826C14.9326 19.5201 14.6451 19.9859 14.4925 20.5364C14.4038 20.8575 14.4003 21.6302 14.489 21.9478C14.7196 22.7805 15.2235 23.5427 15.9297 24.1249L16.1604 24.312L16.2775 23.9873L16.3946 23.6627L16.1533 23.4298C15.2945 22.6112 14.929 21.6161 15.149 20.6987C15.2945 20.0988 15.6281 19.6366 16.0717 19.4143C16.753 19.0755 17.4414 19.2237 18.137 19.8589L18.3392 20.0424L18.5273 19.7707L18.7154 19.499L18.5202 19.3261C18.0979 18.9485 17.5195 18.6415 17.0404 18.5427C16.8062 18.4898 16.7424 18.4898 16.501 18.5145Z" fill="black"/>
  <path d="M20.7416 18.9979C20.6919 19.072 20.6848 19.1355 20.7025 19.3119C20.7132 19.4354 20.7451 19.6048 20.77 19.693L20.8161 19.8483L21.1497 19.8694C22.3101 19.9435 23.4492 20.4552 24.2725 21.2773C25.1348 22.1313 25.4045 22.9146 25.408 24.5413C25.4116 25.9633 25.518 26.3761 25.958 26.6761C26.3023 26.9125 26.7991 27.036 27.6685 27.0995C28.6621 27.1736 29.5776 27.0254 30.4222 26.6443L30.6671 26.5349L30.55 26.3867C29.8509 25.494 29.0879 24.6471 28.073 23.6415C26.0645 21.6514 24.1412 20.18 22.5159 19.3896C21.8168 19.0508 21.4974 18.9449 21.1106 18.9238C20.809 18.9061 20.8019 18.9061 20.7416 18.9979Z" fill="black"/>
  <path d="M19.4393 20.6669C18.3179 22.2618 17.3988 24.2272 17.0546 25.7657C16.7814 26.976 16.753 28.1475 16.9659 29.199C17.3882 31.2738 19.0099 33.2851 21.0468 34.2625C22.0937 34.7636 23.0944 34.9647 24.3258 34.9224C25.4897 34.88 26.4869 34.6613 27.7502 34.1673C28.8751 33.7262 30.2448 32.9852 31.2598 32.2724C31.4478 32.1383 31.4762 32.1066 31.4194 32.0889C31.1072 31.9795 30.7452 31.8207 30.3229 31.602C27.0475 29.9224 22.594 25.6281 20.5358 22.1701C20.259 21.7043 19.9219 21.0445 19.7835 20.6951C19.7303 20.5575 19.6771 20.434 19.6593 20.4199C19.6451 20.4023 19.5458 20.5152 19.4393 20.6669ZM23.2789 26.7855C24.1625 27.0113 24.7658 27.6006 25.0248 28.5004C25.0923 28.7297 25.1064 28.8567 25.1029 29.2696C25.1029 29.6895 25.0852 29.8165 25.0071 30.1164C24.7196 31.1821 23.9248 32.2054 22.9382 32.7735C22.3137 33.1334 21.5188 33.3345 20.8694 33.2992C20.4365 33.2745 20.1845 33.2075 19.7729 33.0064C18.6338 32.4524 18.1795 31.0903 18.6515 29.6542C18.8964 28.8991 19.4429 28.1299 20.0816 27.6288C21.1001 26.8313 22.2534 26.5279 23.2789 26.7855Z" fill="black"/>
  <path d="M22.2107 26.9584C20.8729 27.1207 19.5563 28.1334 18.9992 29.4319C18.584 30.4058 18.6266 31.4079 19.1128 32.1207C19.3292 32.4348 19.5351 32.6077 19.9254 32.8017C20.3512 33.0099 20.6671 33.077 21.1497 33.0523C22.814 32.964 24.315 31.7043 24.7764 30.0106C24.8402 29.7813 24.8544 29.6331 24.8544 29.2343C24.8509 28.7968 24.8402 28.7086 24.7586 28.4545C24.4641 27.5653 23.7082 27.0113 22.7111 26.9478C22.5656 26.9372 22.3385 26.9443 22.2107 26.9584ZM23.0304 27.7559C23.0517 27.777 23.0411 27.8547 22.9914 27.9817C22.9488 28.0875 22.892 28.3169 22.8637 28.4933C22.8033 28.8638 22.7324 29.0403 22.5585 29.2343C22.3739 29.446 22.1255 29.566 21.7423 29.626C21.3129 29.693 21.1284 29.7566 20.8693 29.9224C20.3406 30.2611 20.0886 30.674 19.9644 31.4009C19.8864 31.8455 19.8722 31.8667 19.7515 31.7114C19.3718 31.2174 19.3789 30.3352 19.7693 29.5695C20.078 28.9591 20.738 28.2887 21.3094 28.0099C21.5116 27.9076 21.8771 27.7841 22.1113 27.7347C22.3136 27.6959 22.9808 27.7065 23.0304 27.7559ZM23.875 28.3592C24.2547 28.9626 24.1837 29.8377 23.6834 30.6705C23.4634 31.0374 22.9311 31.5808 22.562 31.8208C22.0226 32.1701 21.4087 32.3501 20.9013 32.3113C20.5677 32.2866 20.4967 32.2619 20.5322 32.1842C20.6209 31.9866 20.6884 31.7396 20.7203 31.4926C20.77 31.1433 20.8906 30.8928 21.1 30.6987C21.3058 30.5117 21.4974 30.427 21.8275 30.3811C22.3952 30.3 22.6933 30.1623 23.0517 29.8024C23.3711 29.4849 23.5095 29.2096 23.5982 28.705C23.7047 28.1122 23.7118 28.1017 23.875 28.3592Z" fill="black"/>
  <path d="M22.0013 28.0205C21.4655 28.1581 21.061 28.3981 20.6422 28.8215C20.3016 29.1638 20.149 29.3684 19.9751 29.7283C19.787 30.1165 19.7302 30.3635 19.7302 30.7869L19.7338 31.1398L19.8296 30.8575C20.1135 30.0353 20.77 29.5131 21.6713 29.3896C21.9978 29.3437 22.2391 29.2308 22.3881 29.0508C22.5194 28.8921 22.5833 28.7227 22.6365 28.3875C22.6578 28.2499 22.6862 28.0981 22.6969 28.0417L22.7182 27.9464L22.4946 27.9499C22.3704 27.9499 22.1468 27.9817 22.0013 28.0205Z" fill="black"/>
  <path d="M23.797 28.9944C23.7828 29.0791 23.7083 29.2731 23.6302 29.4319C23.4563 29.7883 23.0624 30.1976 22.7218 30.3741C22.484 30.4976 22.0298 30.6281 21.8275 30.6281C21.5614 30.6316 21.2136 30.861 21.0752 31.1292C21.0397 31.2033 20.99 31.3797 20.9723 31.5244C20.951 31.6655 20.9191 31.8384 20.9013 31.9019C20.88 31.969 20.8658 32.036 20.8658 32.0537C20.8658 32.1066 21.4407 32.0466 21.682 31.9655C22.1504 31.8137 22.5053 31.5985 22.8921 31.2386C23.577 30.5964 23.9638 29.7001 23.8538 29.0226L23.8254 28.8462L23.797 28.9944Z" fill="black"/>
  <path d="M32.9773 20.7551C32.8176 20.8328 32.8814 21.1009 33.1724 21.6091C33.3818 21.969 33.545 22.3924 33.6515 22.8476C33.7509 23.2816 33.758 24.1249 33.6621 24.5589C33.3499 25.9951 32.5017 27.0254 31.0681 27.7206C30.2164 28.1299 29.3896 28.3275 28.4173 28.3592L27.7856 28.3804L28.1618 28.6768C28.3712 28.8391 28.7154 29.1002 28.9283 29.252C29.3648 29.566 29.3825 29.5695 29.8084 29.4813C30.7381 29.2872 31.5827 28.8215 32.3137 28.0981C32.7147 27.7064 32.8389 27.6465 33.1228 27.7064C33.4989 27.7876 33.7083 28.2004 33.5557 28.5639C33.4918 28.7121 33.034 29.192 32.6827 29.4743C32.1966 29.8624 31.5294 30.247 31.0504 30.4129L30.8552 30.4799L31.2101 30.6458C31.7175 30.8822 32.2533 31.0551 32.5621 31.0762L32.8211 31.0974L33.1121 30.8187C34.2796 29.693 35.0355 28.1158 35.3087 26.2315C35.4045 25.5858 35.4364 24.5589 35.3832 24.012C35.2271 22.4453 34.6167 21.3056 33.6728 20.8363C33.4137 20.7057 33.144 20.674 32.9773 20.7551Z" fill="black"/>
  <path d="M21.5861 21.4502C22.1823 22.4629 23.222 23.8744 23.9992 24.7318L24.166 24.9188V24.5907C24.166 24.1355 24.1057 23.4968 24.0382 23.2427C23.9069 22.7311 23.5414 22.23 23.0269 21.8454C22.5868 21.5137 22.0404 21.2632 21.5719 21.1785L21.4052 21.1468L21.5861 21.4502Z" fill="black"/>
  <path d="M5.5251 25.6493L5.3938 25.6704L5.59607 25.7763C5.88706 25.928 6.2916 26.3162 6.44419 26.5985C6.45483 26.6161 7.16811 26.235 7.16811 26.2103C7.16811 26.1997 7.0581 26.115 6.9197 26.0233C6.49032 25.7375 5.9119 25.5822 5.5251 25.6493Z" fill="white"/>
  <path d="M44.1625 25.6528C43.8928 25.6952 43.5237 25.8469 43.254 26.0268C43.1192 26.1151 43.0092 26.1997 43.0092 26.2103C43.0092 26.235 43.7224 26.6161 43.7331 26.5985C43.8857 26.3162 44.2867 25.9316 44.5883 25.7693C44.7267 25.6952 44.7764 25.6528 44.7267 25.6528C44.6841 25.6528 44.5812 25.6458 44.496 25.6387C44.4109 25.6281 44.2618 25.6352 44.1625 25.6528Z" fill="white"/>
  <path d="M4.60965 26.4185C4.53158 26.6902 4.55642 27.1101 4.66642 27.4171C4.76933 27.7029 4.84031 27.8334 5.03193 28.0981L5.15259 28.2639L5.30163 27.9569C5.38679 27.784 5.53584 27.537 5.6352 27.4065C5.73811 27.2759 5.81973 27.1524 5.81973 27.1312C5.81973 27.0571 5.63875 26.8207 5.45067 26.6514C5.30872 26.5208 5.17388 26.4432 4.96451 26.362C4.80837 26.302 4.67352 26.2526 4.66642 26.2526C4.66288 26.2526 4.63804 26.3267 4.60965 26.4185Z" fill="white"/>
  <path d="M45.1987 26.3655C45.0071 26.4396 44.8651 26.5243 44.7267 26.6513C44.5386 26.8207 44.3577 27.0571 44.3577 27.1312C44.3577 27.1524 44.4393 27.2759 44.5422 27.4065C44.6416 27.537 44.7906 27.784 44.8758 27.9569L45.0248 28.2639L45.1455 28.0981C45.4577 27.6641 45.6032 27.283 45.6103 26.8701C45.6139 26.609 45.55 26.2491 45.4968 26.2561C45.4861 26.2561 45.3513 26.3055 45.1987 26.3655Z" fill="white"/>
  <path d="M7.66856 26.9055C7.27111 27.0184 6.9269 27.2301 6.54365 27.6112C6.23137 27.9182 6.16394 28.0064 6.022 28.2992C5.93328 28.4827 5.84102 28.705 5.82328 28.7932C5.78069 28.9767 5.77005 29.499 5.81263 29.499C5.82683 29.499 5.8836 29.4107 5.94038 29.3049C6.04329 29.1073 6.30944 28.8074 6.52945 28.645C6.73527 28.4898 7.06174 28.3451 7.41306 28.2463C7.8034 28.1369 7.90986 28.0875 8.11923 27.9182C8.3144 27.7629 8.48829 27.5018 8.60539 27.1948L8.69411 26.9584L8.59829 26.916C8.44215 26.8525 7.88857 26.8455 7.66856 26.9055Z" fill="white"/>
  <path d="M41.6962 26.8772C41.6678 26.8878 41.6075 26.9125 41.5613 26.9266L41.4833 26.9584L41.572 27.1948C41.6891 27.5018 41.863 27.7629 42.0582 27.9181C42.2675 28.0875 42.374 28.1369 42.7643 28.2463C43.1156 28.3451 43.4421 28.4898 43.6479 28.645C43.8679 28.8074 44.1341 29.1073 44.237 29.3049C44.2938 29.4107 44.3506 29.499 44.3683 29.499C44.4073 29.499 44.3967 28.9767 44.3541 28.7932C44.3364 28.705 44.2441 28.4827 44.1554 28.2992C44.0134 28.0064 43.946 27.9181 43.6337 27.6112C43.2434 27.223 42.8992 27.0113 42.4911 26.9054C42.2924 26.856 41.8062 26.8384 41.6962 26.8772Z" fill="white"/>
  <path d="M9.15536 27.904C8.97438 28.2534 8.60888 28.6027 8.22917 28.7862C8.06594 28.8673 7.80689 28.9661 7.65075 29.0049C7.49816 29.0438 7.32073 29.1037 7.2604 29.1355C6.89135 29.3225 6.6252 29.626 6.47616 30.0388L6.39099 30.2682L6.54003 30.3035C6.81683 30.374 6.94458 30.3811 7.19653 30.3458C8.0269 30.2294 8.83599 29.5695 9.17665 28.7262C9.27956 28.4721 9.33989 28.0558 9.3044 27.8335L9.27956 27.6641L9.15536 27.904Z" fill="white"/>
  <path d="M40.8693 27.8476C40.7629 28.7474 41.501 29.8236 42.4946 30.2188C42.8956 30.3776 43.2434 30.4023 43.6373 30.3035L43.7863 30.2682L43.7011 30.0389C43.5521 29.626 43.2859 29.3226 42.9169 29.1355C42.8566 29.1038 42.6791 29.0438 42.5265 29.005C42.3704 28.9662 42.1114 28.8674 41.9481 28.7862C41.572 28.6062 41.2065 28.2569 41.0184 27.9005L40.8906 27.6571L40.8693 27.8476Z" fill="white"/>
  <path d="M18.5911 41.1997C18.2895 41.2915 18.0162 41.6443 17.8707 42.1277C17.6649 42.8229 18.0304 43.4016 18.6834 43.4016C18.9353 43.4016 19.0844 43.338 19.2654 43.1581C19.6096 42.8158 19.8047 42.1066 19.6664 41.7043C19.5315 41.3232 18.9992 41.0727 18.5911 41.1997Z" fill="#BD0707"/>
</svg>
</Box>
<Box>
<svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
  <g clip-path="url(#clip0_55_262)">
    <path d="M23.125 0H0V23.125H23.125V0ZM18.5 18.5H4.625V4.625H18.5V18.5Z" fill="black"/>
    <path d="M13.875 9.25H9.25V13.875H13.875V9.25Z" fill="black"/>
    <path d="M50.875 0V23.125H74V0H50.875ZM69.375 18.5H55.5V4.625H69.375V18.5Z" fill="black"/>
    <path d="M64.75 9.25H60.125V13.875H64.75V9.25Z" fill="black"/>
    <path d="M0 74H23.125V50.875H0V74ZM4.625 55.5H18.5V69.375H4.625V55.5Z" fill="black"/>
    <path d="M13.875 60.125H9.25V64.75H13.875V60.125Z" fill="black"/>
    <path d="M46.25 0H37V4.625H46.25V0Z" fill="black"/>
    <path d="M37 18.5H41.625V13.875H46.25V9.25H32.375V4.625H27.75V9.25V11.5625V13.875H37V18.5Z" fill="black"/>
    <path d="M32.375 18.5H27.75V23.125H32.375V18.5Z" fill="black"/>
    <path d="M46.25 23.125H41.625V27.75H27.75V32.375H46.25V23.125Z" fill="black"/>
    <path d="M4.625 41.625H9.25V37H4.625V27.75H0V46.25H4.625V41.625Z" fill="black"/>
    <path d="M13.875 27.75H9.25V32.375H13.875V27.75Z" fill="black"/>
    <path d="M27.75 46.25H37V41.625H32.375V37H23.125V27.75H18.5V37H13.875V46.25H18.5V41.625H20.8125H23.125H27.75V46.25Z" fill="black"/>
    <path d="M46.25 37H41.625V46.25H46.25V37Z" fill="black"/>
    <path d="M41.625 50.875H27.75V55.5H37V69.375H27.75V74H41.625V69.375H50.875V64.75H41.625V50.875Z" fill="black"/>
    <path d="M32.375 60.125H27.75V64.75H32.375V60.125Z" fill="black"/>
    <path d="M50.875 50.875H46.25V60.125H50.875V50.875Z" fill="black"/>
    <path d="M69.375 60.125H55.5V74H60.125V64.75H69.375V60.125Z" fill="black"/>
    <path d="M74 69.375H64.75V74H74V69.375Z" fill="black"/>
    <path d="M74 50.875H69.375V55.5H74V50.875Z" fill="black"/>
    <path d="M55.5 55.5H60.125V41.625H50.875V46.25H55.5V55.5Z" fill="black"/>
    <path d="M64.75 32.375H60.125V27.75H55.5V32.375H50.875V37H69.375V32.375H74V27.75H64.75V32.375Z" fill="black"/>
    <path d="M74 41.625H64.75V46.25H74V41.625Z" fill="black"/>
  </g>
  <defs>
    <clipPath id="clip0_55_262">
      <rect width="74" height="74" fill="white"/>
    </clipPath>
  </defs>
</svg>
</Box>
<Box w={"112px"} h={"19px"} borderRadius={"2px"} >
    <Text color={" #00D1FF"}>On the Wayt</Text>
</Box>
        </Box>
    </Flex>
 
  
</Card>
        </Box>
       
    )
}

export default CardPay