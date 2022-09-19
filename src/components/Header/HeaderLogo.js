import { Link } from '@mui/material';
import React from 'react';
import './header.scss'
const HeaderLogo = () => {
    return (
        <div className='header__logo'>
            <Link href="#">
                <svg width="158" height="40" viewBox="0 0 158 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.6428 17.7119C32.6428 17.7119 32.6112 17.7119 32.6428 17.7119C32.6112 17.6806 32.6112 17.6806 32.6112 17.6806C32.6112 17.6806 30.7468 16.1448 28.3452 15.6119C27.808 15.4866 27.2392 15.4239 26.6704 15.3925C25.2484 15.2985 23.858 15.4239 22.8468 15.5492C21.9936 15.6746 21.4248 15.8 21.4248 15.8C19.2128 16.2701 17.2536 16.8343 15.5472 17.5239C15.168 17.3045 14.6624 16.9597 14.062 16.4895C13.746 16.2388 13.3984 15.9567 13.0508 15.6433C10.3648 13.2612 6.50962 8.65372 3.63402 0.253723C3.63402 0.253723 -6.03557 10.597 6.16202 22.5388C6.28842 22.6642 6.41482 22.7895 6.54122 22.9149C6.69922 23.0716 6.88882 23.2283 7.04682 23.3851C0.316024 32.1298 8.78482 43.4134 19.908 37.2388C19.7184 37.3015 19.5288 37.3642 19.3708 37.4269C10.8388 41.3448 3.60242 32.8194 11.1232 26.0179C11.218 26.2686 11.3128 26.5194 11.4392 26.7701C19.7184 43.6642 31.3472 36.3298 31.3472 36.3298C21.962 30.3746 19.5288 22.0686 19.5288 22.0686C19.5288 21.8806 19.5288 21.7239 19.5604 21.5358C22.8152 20.4701 26.8916 19.6239 31.8528 19.1537C33.2432 19.0597 32.8008 17.9627 32.6428 17.7119Z" fill="#3CBFEB"/>
                <path d="M32.6113 17.6806C32.6429 17.7119 32.6429 17.7119 32.6429 17.7119C32.8325 17.9313 33.2433 19.0597 31.8529 19.1851C-2.71755 22.4761 6.95205 43.1627 19.3708 37.4582C19.5604 37.3955 19.7501 37.3328 19.9081 37.2701C21.5197 36.6433 23.1629 35.5776 24.7113 34.0418C25.9753 32.788 27.0181 31.4089 27.8081 29.9985C29.6725 26.6761 30.3045 23.103 29.5145 20.0627C30.5257 19.9373 31.4105 19.8433 32.0425 19.7179C33.5277 19.3731 33.3697 18.2448 32.6113 17.6806ZM26.7653 20.4074C26.9233 20.3761 27.1129 20.3448 27.2709 20.3134C27.9977 22.7582 27.5237 25.5164 26.5125 27.9298C26.2597 28.5567 25.9753 29.1522 25.6593 29.6851C25.2801 30.3119 24.9009 30.9074 24.4901 31.4403C20.7929 27.491 19.3076 23.6671 18.8968 22.4761C21.0773 21.6298 23.6685 20.9403 26.7653 20.4074ZM14.1252 24.8582C16.8429 31.3149 20.6665 32.788 23.1945 33.0074C23.1629 33.0388 23.1629 33.0388 23.1313 33.0701C12.5768 41.8462 3.76045 31.8164 14.1252 24.8582Z" fill="#074793"/>
                <path d="M17.696 15.2672C19.118 14.9851 21.0772 14.9851 22.8152 15.5179C22.8152 15.5179 22.8152 15.5179 22.8468 15.5179C23.858 15.3925 25.2484 15.2672 26.6704 15.3612C23.1312 12.697 17.7592 12.8851 13.0508 15.6433C13.3984 15.9567 13.746 16.2388 14.062 16.4896C15.2944 15.9254 16.5268 15.5179 17.696 15.2672Z" fill="#074793"/>
                <path d="M4.32922 27.397C4.89802 25.7358 5.65642 24.2313 6.54122 22.9149C6.41482 22.7895 6.28842 22.6642 6.16202 22.5388C5.27722 24.1373 4.64522 25.7671 4.32922 27.397Z" fill="#074793"/>
                <path d="M5.97246 28.7448C5.84606 28.7134 5.68806 28.7761 5.65646 28.9328C5.62486 29.0895 5.68806 29.2149 5.84606 29.2776C5.97246 29.3089 6.13046 29.2149 6.16206 29.0895C6.19366 28.9642 6.09886 28.8075 5.97246 28.7448ZM6.95206 26.5821C6.79406 26.5507 6.63606 26.6448 6.57286 26.8015C6.50966 26.9582 6.60446 27.1463 6.76246 27.1776C6.92046 27.2403 7.11006 27.1149 7.14166 26.9582C7.20486 26.8015 7.11006 26.6134 6.95206 26.5821ZM8.31086 24.5448C8.12126 24.4821 7.90006 24.6075 7.83686 24.8269C7.77366 25.0463 7.90006 25.2343 8.08966 25.297C8.27926 25.3597 8.50046 25.2343 8.53206 25.0149C8.62686 24.7955 8.53206 24.5761 8.31086 24.5448ZM19.1497 17.9627C18.9601 17.9 18.7389 18.0254 18.6757 18.2448C18.6125 18.4642 18.7073 18.6836 18.9285 18.7463C19.1497 18.8089 19.3393 18.6836 19.4025 18.4642C19.4657 18.2448 19.3393 18.0254 19.1497 17.9627ZM21.6461 17.3045C21.4565 17.2418 21.2353 17.3672 21.1721 17.5866C21.1089 17.806 21.2353 18.0254 21.4249 18.088C21.6145 18.1507 21.8357 18.0254 21.8989 17.806C21.9621 17.5866 21.8357 17.3672 21.6461 17.3045Z" fill="#074793"/>
                <path d="M31.9793 17.2418C30.1149 17.3358 29.1037 17.4298 28.0609 17.1164C26.7021 16.709 26.9233 16.5209 26.9233 16.5209C27.0497 16.3642 28.2189 16.0821 30.0201 16.1448C30.0201 16.1448 30.6521 16.4269 31.1261 16.709C31.5685 16.9597 31.9793 17.2418 31.9793 17.2418Z" fill="#074793"/>
                <path d="M16.3688 18.997C16.3688 18.997 8.65837 13.794 5.97237 7.74478C5.97237 7.74478 1.99077 16.1448 11.692 22.8522C11.7236 22.8522 16.7164 20.6896 16.3688 18.997Z" fill="#074793"/>
                <path d="M27.8389 29.9358C27.8083 29.9662 27.8083 29.9662 27.8389 29.9358C27.8083 29.9662 27.8083 29.9662 27.8389 29.9358C27.8083 29.9662 27.8083 29.9662 27.8389 29.9358Z" fill="#3CBFEB"/>
                <path d="M75.524 20.6582C74.1968 19.906 72.7116 19.5612 71.2264 19.5612H71.1632C69.7096 19.5612 68.1928 19.906 66.8656 20.6582C66.1388 21.0657 65.6648 21.6298 65.412 22.2254V31.597C65.6648 32.1925 66.1388 32.7567 66.8656 33.1642C70.2468 35.1388 74.9236 34.2612 76.788 32.2239C76.788 32.2239 77.262 31.6597 76.63 30.9075C75.5556 29.6537 75.1764 29.9672 75.1764 29.9672C72.5852 32.4746 68.9512 31.2522 68.7932 30.7507C68.7616 30.6567 68.6984 30.4373 68.6984 30.2179V28.4627C69.4884 28.6821 70.3416 28.7761 71.1632 28.7761H71.2264C72.7116 28.7761 74.1968 28.4627 75.524 27.6791C76.2508 27.2403 76.7248 26.7075 76.9776 26.0806V22.2254C76.7248 21.6298 76.2508 21.0657 75.524 20.6582ZM73.6912 24.7955C73.6912 24.9836 73.628 25.203 73.5964 25.3284C73.5016 25.5791 72.522 26.0493 71.1948 26.0806C69.8676 26.0493 68.888 25.6104 68.7932 25.3284C68.7616 25.2343 68.6984 25.0149 68.6984 24.7955V23.6045C68.6984 23.4164 68.7616 23.197 68.7932 23.0716C68.888 22.8209 69.8676 22.3507 71.1948 22.3194C72.4904 22.3507 73.5016 22.7895 73.5964 23.0716C73.628 23.1657 73.6912 23.3851 73.6912 23.6045V24.7955Z" fill="#074793"/>
                <path d="M90.6604 21.5671C90.6604 21.5671 90.1864 22.1627 90.8184 22.8836C91.8928 24.1373 92.272 23.8239 92.272 23.8239C93.5044 22.6328 94.958 22.288 96.1904 22.288C97.5492 22.3194 98.75 22.7268 98.75 23.2283V25.297C95.7796 24.5134 93.2832 25.297 91.956 26.0806C91.2292 26.5194 90.7552 27.0522 90.5024 27.6477V31.5657C90.7552 32.1612 91.2292 32.7254 91.956 33.1642C94.4524 34.606 98.0548 34.6373 100.583 33.1642C101.31 32.7254 101.784 32.1925 102.036 31.5657V22.194C100.109 18.5268 92.8092 19.0283 90.6604 21.5671ZM98.75 30.2179C98.75 30.406 98.6868 30.6567 98.6552 30.7507C98.5604 31.0328 97.5808 31.4716 96.2536 31.503C94.958 31.4716 93.9468 31.0328 93.852 30.7507C93.8204 30.6567 93.7572 30.4373 93.7572 30.2179V29.0268C93.7572 28.8388 93.8204 28.6194 93.852 28.494C93.9468 28.2433 94.9264 27.7731 96.2536 27.7418C97.5492 27.7731 98.5604 28.2433 98.6552 28.494C98.6868 28.588 98.75 28.8074 98.75 29.0268V30.2179Z" fill="#074793"/>
                <path d="M89.428 20.094C89.3648 19.9686 89.3016 19.906 89.2384 19.8433C89.1752 19.7806 89.0804 19.7806 88.9856 19.7806H78.5261C78.4313 19.7806 78.3365 19.8119 78.2733 19.8433C78.2101 19.906 78.1469 19.9686 78.0837 20.094C78.0205 20.2194 77.9889 20.3448 77.9573 20.5328C77.9257 20.7209 77.9257 20.9716 77.9257 21.2537C77.9257 21.5358 77.9257 21.7865 77.9573 21.9746C77.9573 22.1627 78.0205 22.3194 78.0837 22.4134C78.1469 22.5388 78.1785 22.6015 78.2733 22.6642C78.3365 22.7268 78.4313 22.7268 78.5261 22.7268H82.0653V33.5089C82.0653 33.603 82.0969 33.6657 82.1285 33.7283C82.1917 33.791 82.2864 33.8537 82.4128 33.8851C82.5392 33.9164 82.6973 33.9477 82.9184 33.9791C83.1396 34.0104 83.3925 34.0104 83.7401 34.0104C84.0877 34.0104 84.3405 33.9791 84.5617 33.9791C84.7829 33.9477 84.9408 33.9164 85.0988 33.8851C85.2252 33.8224 85.3201 33.791 85.3833 33.7283C85.4465 33.6657 85.478 33.5716 85.478 33.5089V22.7268H88.9856C89.0804 22.7268 89.1752 22.6955 89.2384 22.6642C89.3016 22.6328 89.3648 22.5388 89.428 22.4134C89.4596 22.3194 89.5228 22.1627 89.5544 21.9746C89.586 21.7865 89.586 21.5671 89.586 21.2537C89.586 20.9716 89.586 20.7209 89.5544 20.5328C89.5228 20.3448 89.4596 20.188 89.428 20.094Z" fill="#074793"/>
                <path d="M63.832 20.5328C63.8004 20.3448 63.7688 20.188 63.7056 20.094C63.6424 19.9686 63.6108 19.906 63.516 19.8433C63.4528 19.7806 63.358 19.7806 63.2632 19.7806H56.7852C54.3836 19.7806 54.352 20.4701 54.194 22.3821C53.9096 25.7671 53.562 29.497 51.034 31.6283C50.9708 31.691 50.9076 31.7537 50.9076 31.8477C50.876 31.9418 50.9076 32.0358 50.9392 32.1612C50.9708 32.2866 51.0656 32.4433 51.192 32.6313C51.3184 32.8194 51.4764 33.0388 51.666 33.2895C51.8872 33.5403 51.9504 33.603 52.1084 33.7597C52.2664 33.9164 52.3928 34.0104 52.5192 34.0731C52.6456 34.1358 52.772 34.1671 52.8668 34.1671C52.9616 34.1671 53.0564 34.1045 53.1512 34.0418C56.3428 31.7224 56.9432 27.5224 57.4488 24.0433C57.512 23.6045 57.4488 22.7582 58.2704 22.7582H60.4192V33.5403C60.4192 33.6343 60.4508 33.697 60.514 33.7597C60.5772 33.8224 60.672 33.8851 60.7984 33.9164C60.9248 33.9477 61.1144 33.9791 61.304 34.0104C61.5252 34.0418 61.8096 34.0418 62.1256 34.0418C62.4416 34.0418 62.726 34.0104 62.9472 34.0104C63.1684 33.9791 63.3264 33.9477 63.4528 33.9164C63.5792 33.8851 63.674 33.8224 63.7372 33.7597C63.8004 33.697 63.832 33.603 63.832 33.5403V21.191C63.8636 20.9403 63.832 20.7209 63.832 20.5328Z" fill="#074793"/>
                <path d="M114.297 20.094C114.234 19.9686 114.202 19.906 114.108 19.8433C114.044 19.7806 113.95 19.7806 113.855 19.7806H103.395C103.3 19.7806 103.206 19.8119 103.142 19.8433C103.079 19.906 103.016 19.9686 102.953 20.094C102.921 20.2194 102.858 20.3448 102.826 20.5328C102.795 20.7209 102.795 20.9716 102.795 21.2537C102.795 21.5358 102.795 21.7865 102.826 21.9746C102.858 22.1627 102.89 22.3194 102.953 22.4134C103.016 22.5388 103.079 22.6015 103.142 22.6642C103.206 22.7268 103.3 22.7268 103.395 22.7268H106.934V33.5089C106.934 33.603 106.966 33.6657 106.998 33.7283C107.061 33.791 107.156 33.8537 107.282 33.8851C107.408 33.9164 107.598 33.9477 107.819 33.9791C108.04 34.0104 108.293 34.0104 108.641 34.0104C108.988 34.0104 109.241 33.9791 109.462 33.9791C109.684 33.9477 109.873 33.9164 109.968 33.8851C110.094 33.8224 110.189 33.791 110.252 33.7283C110.316 33.6657 110.347 33.5716 110.347 33.5089V22.7268H113.886C113.981 22.7268 114.044 22.6955 114.139 22.6642C114.202 22.6328 114.266 22.5388 114.329 22.4134C114.392 22.3194 114.424 22.1627 114.455 21.9746C114.487 21.7865 114.487 21.5671 114.487 21.2537C114.487 20.9716 114.455 20.7209 114.455 20.5328C114.392 20.3448 114.36 20.188 114.297 20.094Z" fill="#074793"/>
                <path d="M125.452 26.1119C124.156 25.3597 121.66 24.5761 118.753 25.3284V20.3134C118.753 20.2194 118.721 20.1567 118.69 20.094C118.626 20.0314 118.532 19.9687 118.405 19.9373C118.279 19.8746 118.089 19.8433 117.9 19.8433C117.678 19.812 117.394 19.812 117.078 19.812C116.73 19.812 116.478 19.812 116.256 19.8433C116.035 19.8746 115.877 19.906 115.719 19.9373C115.593 19.9687 115.498 20.0314 115.435 20.094C115.403 20.1567 115.372 20.2508 115.372 20.3134V31.6284C115.624 32.2239 116.098 32.7881 116.825 33.1955C119.353 34.6687 122.987 34.6373 125.452 33.1955C126.179 32.7881 126.653 32.2239 126.906 31.6284V27.7105C126.653 27.1149 126.179 26.5508 125.452 26.1119ZM123.619 30.2493C123.619 30.4373 123.556 30.6567 123.524 30.7821C123.43 31.0328 122.45 31.503 121.123 31.5343C119.796 31.503 118.816 31.0642 118.721 30.7821C118.69 30.6881 118.626 30.4687 118.626 30.2493V29.0582C118.626 28.8702 118.69 28.6508 118.721 28.5254C118.816 28.2746 119.796 27.8045 121.123 27.7731C122.418 27.8045 123.43 28.2433 123.524 28.5254C123.556 28.6194 123.619 28.8388 123.619 29.0582V30.2493Z" fill="#074793"/>
                <path d="M44.4612 22.2881C45.662 22.2881 47.1472 22.6328 48.3796 23.8239C48.3796 23.8239 48.7588 24.1373 49.8332 22.8836C50.4652 22.1627 49.9912 21.5672 49.9912 21.5672C47.8108 19.0284 40.764 18.1194 38.5836 23.103V30.6567C40.7324 35.609 47.8108 34.7313 49.9912 32.1925C49.9912 32.1925 50.4652 31.597 49.8332 30.8761C48.7588 29.6224 48.3796 29.9358 48.3796 29.9358C47.1472 31.1269 45.6936 31.4716 44.4612 31.4403C43.1024 31.4403 41.9016 30.3433 41.9016 29.8105V23.9179C41.9016 23.3851 43.134 22.3194 44.4612 22.2881Z" fill="#074793"/>
                <path d="M157.652 20.0627C157.589 20 157.494 19.9373 157.368 19.9059C157.242 19.8746 157.084 19.8433 156.862 19.8119C156.641 19.7806 156.388 19.7806 156.041 19.7806C155.725 19.7806 155.44 19.7806 155.219 19.8119C154.998 19.8433 154.84 19.8746 154.682 19.9059C154.556 19.9686 154.461 20 154.398 20.0627C154.334 20.1254 154.334 20.2194 154.334 20.3134V30.7821C154.24 31.0328 153.26 31.4716 151.933 31.503C150.637 31.4716 149.626 31.0328 149.563 30.7821V20.3134C149.563 20.2194 149.531 20.1567 149.468 20.0627C149.405 20 149.31 19.9373 149.184 19.9059C149.057 19.8746 148.868 19.8433 148.678 19.8119C148.457 19.7806 148.172 19.7806 147.856 19.7806C147.54 19.7806 147.256 19.7806 147.035 19.8119C146.814 19.8433 146.656 19.8746 146.498 19.9059C146.371 19.9686 146.276 20 146.213 20.0627C146.15 20.1254 146.118 20.2194 146.118 20.3134V31.597C146.371 32.1925 146.845 32.7567 147.572 33.1642C148.899 33.9164 150.416 34.2612 151.87 34.2612H151.933C152.754 34.2612 153.576 34.1358 154.398 33.9164V34.4806C154.398 35.0134 151.459 36.0791 148.773 35.7657C148.488 35.7343 148.425 35.9224 148.362 36.2671C148.299 36.6433 148.141 37.2701 148.046 37.8343C147.983 38.1164 147.983 38.3985 148.267 38.4612C151.016 38.7746 155.756 38.3671 157.716 35.5776V20.3134C157.716 20.2194 157.716 20.1254 157.652 20.0627Z" fill="#F7A712"/>
                <path d="M131.33 31.1269C131.203 31.0642 131.014 31.0328 130.824 31.0015C130.603 30.9702 130.35 30.9702 130.002 30.9702C129.686 30.9702 129.402 30.9702 129.181 31.0015C128.96 31.0328 128.802 31.0642 128.675 31.1269C128.549 31.1896 128.454 31.2209 128.391 31.3149C128.328 31.3776 128.296 31.4716 128.296 31.5657V33.7597C128.296 33.8537 128.328 33.9164 128.391 34.0105C128.454 34.0731 128.549 34.1358 128.675 34.1672C128.802 34.2299 128.96 34.2612 129.181 34.2612C129.402 34.2925 129.686 34.2925 130.002 34.2925C130.318 34.2925 130.603 34.2925 130.824 34.2612C131.045 34.2299 131.203 34.1985 131.33 34.1672C131.456 34.1045 131.551 34.0731 131.614 34.0105C131.677 33.9478 131.709 33.8537 131.709 33.7597V31.5657C131.709 31.4716 131.677 31.409 131.614 31.3149C131.551 31.2522 131.456 31.1896 131.33 31.1269Z" fill="#F7A712"/>
                <path d="M143.116 20.6582C140.588 19.1851 136.954 19.2164 134.49 20.6582C133.763 21.0657 133.289 21.6298 133.036 22.2254V38.0537C133.036 38.3045 133.289 38.4925 133.921 38.5552C134.142 38.5552 134.395 38.5866 134.742 38.5866C135.09 38.5866 135.343 38.5866 135.564 38.5552C136.196 38.4612 136.354 38.2731 136.354 38.0537V33.9477C138.598 34.5746 141.189 34.3239 143.148 33.1955C143.875 32.788 144.349 32.2239 144.602 31.6283V22.2254C144.317 21.6298 143.843 21.0657 143.116 20.6582ZM141.284 29.6851V30.2492C141.284 30.4373 141.22 30.6567 141.189 30.7821C141.094 31.0328 140.114 31.503 138.787 31.5343C137.492 31.503 136.48 31.0642 136.386 30.7821C136.354 30.688 136.291 30.4686 136.291 30.2492V29.7164V23.5731C136.291 23.3851 136.354 23.1657 136.386 23.0403C136.449 22.7895 137.46 22.3194 138.787 22.288C140.083 22.3194 141.094 22.7582 141.189 23.0403C141.22 23.1343 141.284 23.3537 141.284 23.5731V29.6851Z" fill="#F7A712"/>
                </svg>
            </Link>
        </div>
    )
}

export default HeaderLogo;