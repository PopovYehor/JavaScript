import "./promoution-style.scss"

const promoution = ()=>{
    const elem = `
    <div class="promoution-delivery">

                            <div class="promoution-delivery-img">
                                <div class="promoution-delivery-img-basic">
                                <svg width="71" height="70" viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M67.5227 49.8946L35.7121 55.1953C34.9982 52.6077 33.3607 50.3716 31.1095 48.9099C28.8582 47.4481 26.1493 46.8622 23.4952 47.2629L12.7138 1.43688C12.6352 1.10221 12.434 0.809137 12.1499 0.615449C11.8659 0.421761 11.5196 0.341507 11.1793 0.390506L1.55431 1.76551C1.37185 1.78669 1.19548 1.84422 1.03562 1.9347C0.875767 2.02517 0.735658 2.14676 0.62357 2.29228C0.511482 2.4378 0.429687 2.60431 0.383015 2.78196C0.336344 2.95962 0.325741 3.14483 0.351834 3.32665C0.377927 3.50847 0.440186 3.68322 0.534935 3.84059C0.629684 3.99795 0.755003 4.13473 0.903491 4.24286C1.05198 4.35099 1.22063 4.42827 1.39948 4.47013C1.57833 4.512 1.76375 4.51761 1.94481 4.48663L10.3241 3.29038L20.8428 47.993C19.011 48.7671 17.4233 50.0233 16.2486 51.6279C15.074 53.2326 14.3563 55.1257 14.1719 57.1057C13.9876 59.0858 14.3435 61.0789 15.2017 62.8728C16.06 64.6667 17.3885 66.1944 19.0459 67.2933C20.7033 68.3923 22.6277 69.0213 24.6142 69.1136C26.6007 69.2059 28.5751 68.7579 30.3272 67.8173C32.0794 66.8767 33.5438 65.4788 34.5646 63.7721C35.5855 62.0655 36.1246 60.114 36.1246 58.1254C36.1246 58.0553 36.1149 57.9879 36.1136 57.9178L67.9764 52.6075C68.3362 52.5473 68.6573 52.3467 68.8691 52.0498C69.081 51.7529 69.1662 51.3839 69.106 51.0242C69.0458 50.6644 68.8452 50.3433 68.5483 50.1315C68.2514 49.9197 67.8824 49.8345 67.5227 49.8946V49.8946ZM25.1246 66.3754C23.4929 66.3754 21.8978 65.8915 20.5411 64.985C19.1844 64.0785 18.127 62.79 17.5026 61.2825C16.8781 59.775 16.7148 58.1162 17.0331 56.5159C17.3514 54.9155 18.1371 53.4455 19.2909 52.2917C20.4447 51.138 21.9147 50.3522 23.5151 50.0339C25.1154 49.7156 26.7742 49.8789 28.2817 50.5034C29.7892 51.1278 31.0777 52.1852 31.9842 53.5419C32.8907 54.8986 33.3746 56.4937 33.3746 58.1254C33.3724 60.3127 32.5025 62.4099 30.9558 63.9566C29.4091 65.5033 27.3119 66.3732 25.1246 66.3754Z" fill="#0074D4"/>
                                    <path d="M32.2744 25.0992L52.8994 20.9742C53.0765 20.9381 53.2447 20.8675 53.3945 20.7663C53.5443 20.6652 53.6727 20.5355 53.7723 20.3846C53.8719 20.2338 53.9408 20.0648 53.9751 19.8873C54.0093 19.7099 54.0082 19.5274 53.9719 19.3503L51.2219 5.60032C51.1858 5.42335 51.1152 5.25522 51.0141 5.10553C50.913 4.95585 50.7835 4.82755 50.6328 4.72795C50.4821 4.62835 50.3133 4.55942 50.136 4.52508C49.9587 4.49074 49.7763 4.49167 49.5994 4.52782L28.9743 8.65282C28.7974 8.6889 28.6292 8.7595 28.4796 8.86057C28.3299 8.96164 28.2016 9.09122 28.102 9.24189C28.0024 9.39256 27.9334 9.56138 27.8991 9.7387C27.8648 9.91602 27.8657 10.0984 27.9018 10.2753L30.6518 24.0253C30.6878 24.2024 30.7583 24.3707 30.8593 24.5205C30.9603 24.6704 31.0898 24.7988 31.2405 24.8986C31.3912 24.9983 31.5601 25.0674 31.7375 25.1018C31.9149 25.1362 32.0973 25.1353 32.2744 25.0992ZM48.8005 7.4992L51.0115 18.5528L33.0787 22.1333L30.8677 11.0797L48.8005 7.4992Z" fill="#0074D4"/>
                                    <path d="M66.3516 23.4973C66.2846 23.1422 66.0807 22.8278 65.7837 22.6219C65.4868 22.4161 65.1208 22.3354 64.7648 22.3973L33.1398 27.8973C32.9604 27.9286 32.789 27.9952 32.6356 28.0932C32.4821 28.1913 32.3497 28.3189 32.2459 28.4685C32.1422 28.6182 32.0692 28.787 32.0312 28.9651C31.9932 29.1432 31.991 29.3271 32.0247 29.506L36.1497 51.506C36.2092 51.8206 36.3767 52.1046 36.6232 52.3089C36.8697 52.5132 37.1798 52.6251 37.4999 52.6253C37.5791 52.625 37.6582 52.6185 37.7364 52.606L69.3614 47.106C69.541 47.0749 69.7125 47.0084 69.8661 46.9104C70.0197 46.8124 70.1523 46.6849 70.2562 46.5352C70.3601 46.3855 70.4332 46.2167 70.4712 46.0385C70.5093 45.8603 70.5116 45.6763 70.4779 45.4973L66.3516 23.4973ZM38.5999 49.6635L34.9823 30.3668L63.8999 25.3384L67.5189 44.6352L38.5999 49.6635Z" fill="#0074D4"/>
                                    </svg>         
                                </div>
                                <div class="promoution-delivery-img-background">
                                    <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M54.5 0.875H5C3.90598 0.875 2.85677 1.3096 2.08318 2.08318C1.3096 2.85677 0.875 3.90598 0.875 5V54.5C0.875 55.594 1.3096 56.6432 2.08318 57.4168C2.85677 58.1904 3.90598 58.625 5 58.625H54.5C55.594 58.625 56.6432 58.1904 57.4168 57.4168C58.1904 56.6432 58.625 55.594 58.625 54.5V5C58.625 3.90598 58.1904 2.85677 57.4168 2.08318C56.6432 1.3096 55.594 0.875 54.5 0.875ZM51.75 39.375H49V51.75C49 52.1147 48.8551 52.4644 48.5973 52.7223C48.3394 52.9801 47.9897 53.125 47.625 53.125H42.125C41.7603 53.125 41.4106 52.9801 41.1527 52.7223C40.8949 52.4644 40.75 52.1147 40.75 51.75V39.375H38C37.7546 39.375 37.5136 39.3093 37.3021 39.1847C37.0906 39.0601 36.9163 38.8812 36.7974 38.6666C36.6784 38.4519 36.619 38.2093 36.6255 37.9639C36.6319 37.7185 36.7039 37.4794 36.834 37.2712L43.709 26.2712C43.8408 26.0837 44.0158 25.9307 44.2192 25.825C44.4227 25.7194 44.6485 25.6642 44.8777 25.6642C45.107 25.6642 45.3328 25.7194 45.5362 25.825C45.7397 25.9307 45.9147 26.0837 46.0465 26.2712L52.9215 37.2712C53.0518 37.4798 53.1239 37.7194 53.1301 37.9653C53.1363 38.2111 53.0764 38.4541 52.9568 38.669C52.8372 38.8838 52.6621 39.0626 52.4498 39.1868C52.2376 39.311 51.9959 39.376 51.75 39.375V39.375Z" fill="url(#paint0_linear_68_305)"/>
                                        <defs>
                                        <linearGradient id="paint0_linear_68_305" x1="29.75" y1="0.875" x2="29.75" y2="58.625" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EEF2F5"/>
                                        <stop offset="1" stop-color="#FAFBFC"/>
                                        </linearGradient>
                                        </defs>
                                        </svg>                                        
                                </div>                
                            </div>
                            <div class="promoution-delivery-text">
                            <p ><b>Бесплатная доставка</b> по Днепру и области — от 3 шт.</p>
                            </div>
                            <div class="promoution-delivery-text-support">
                                <a class="promoution-link" href="#">Как получить?</a>
                            </div>
                        </div>

                        <div class="promoution-delivery">

                        <div class="promoution-delivery-img">
                            <div class="promoution-delivery-img-basic">
                                <svg width="49" height="67" viewBox="0 0 49 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44.125 54V52.8367C44.1247 50.6499 43.5306 48.5042 42.4062 46.6286C41.6953 45.4484 41.256 44.1248 41.1202 42.7537C40.9844 41.3826 41.1555 39.9985 41.6211 38.7018L43.2986 34.0034C44.3754 30.9882 44.8305 27.7862 44.6365 24.5904C44.4425 21.3946 43.6034 18.2711 42.1698 15.4083C40.7362 12.5455 38.7378 10.0027 36.2951 7.93296C33.8523 5.86325 31.0157 4.30959 27.9564 3.36562C18.2626 0.375 18.2626 0.375 18 0.375C17.6353 0.375 17.2856 0.519866 17.0277 0.777728C16.7699 1.03559 16.625 1.38533 16.625 1.75V6.53363C14.9021 7.73813 9.76512 11.3269 6.45 13.6066C5.34257 14.3722 4.43696 15.3946 3.81057 16.5863C3.18418 17.778 2.85563 19.1037 2.853 20.45C2.84593 21.0805 2.96614 21.7059 3.20643 22.2889C3.44673 22.8718 3.80216 23.4003 4.25147 23.8427C4.70078 24.2851 5.23472 24.6322 5.82134 24.8635C6.40796 25.0947 7.03519 25.2051 7.6655 25.1882C8.55905 25.19 9.43458 24.937 10.1895 24.4589C10.9444 23.9809 11.5475 23.2976 11.928 22.4891L16.504 23.0611C17.7057 23.2105 18.925 23.007 20.013 22.4754C20.2688 23.8261 20.1631 25.2204 19.7064 26.5171C19.2498 27.8138 18.4586 28.9667 17.4129 29.8591L10.586 35.6341C8.60024 37.3097 7.00439 39.3987 5.90999 41.7551C4.81559 44.1116 4.24906 46.6787 4.25 49.2769V54C3.15598 54 2.10677 54.4346 1.33318 55.2082C0.559597 55.9818 0.125 57.031 0.125 58.125V65C0.125 65.3647 0.269866 65.7144 0.527728 65.9723C0.785591 66.2301 1.13533 66.375 1.5 66.375H46.875C47.2397 66.375 47.5894 66.2301 47.8473 65.9723C48.1051 65.7144 48.25 65.3647 48.25 65V58.125C48.25 57.031 47.8154 55.9818 47.0418 55.2082C46.2682 54.4346 45.219 54 44.125 54ZM39.0746 15.4629C40.6172 18.1014 41.5628 21.0459 41.8451 24.0893C42.1273 27.1326 41.7392 30.2008 40.7081 33.078L39.0375 37.775C38.4343 39.4546 38.2127 41.2474 38.3887 43.0233C38.5647 44.7992 39.1339 46.5136 40.055 48.0421C40.921 49.4913 41.3773 51.1485 41.375 52.8367V54H38.625C38.6567 52.051 38.2201 50.1228 37.3517 48.3776C37.0767 47.5155 34.2346 43.9446 36.1019 39.0923L38.0104 34.1299C38.9837 31.598 39.4338 28.8951 39.3335 26.1844C39.2333 23.4737 38.5847 20.8115 37.427 18.3584C36.2693 15.9054 34.6264 13.7124 32.5976 11.9118C30.5689 10.1113 28.1962 8.74061 25.623 7.8825L24.6303 7.5525L23.9235 4.99912L27.1451 5.99325C32.1705 7.53822 36.4297 10.9192 39.0746 15.4629V15.4629ZM7 49.2769C6.99765 47.0778 7.47574 44.9048 8.40081 42.9097C9.32589 40.9147 10.6756 39.1459 12.3556 37.7269L19.1825 31.9519C20.7909 30.5787 21.9503 28.7545 22.5107 26.7153C23.0711 24.676 23.0066 22.5155 22.3257 20.5132C23.0882 19.4532 23.4989 18.1807 23.5 16.875C23.5 16.5103 23.3551 16.1606 23.0973 15.9027C22.8394 15.6449 22.4897 15.5 22.125 15.5C21.7603 15.5 21.4106 15.6449 21.1527 15.9027C20.8949 16.1606 20.75 16.5103 20.75 16.875C20.7499 17.3685 20.6449 17.8563 20.4419 18.3061C20.239 18.7559 19.9427 19.1574 19.5728 19.484C19.2029 19.8106 18.7678 20.0548 18.2963 20.2005C17.8249 20.3462 17.3278 20.39 16.8381 20.329L12.2621 19.7625C11.6858 19.6939 11.1024 19.8079 10.5943 20.0884C10.0861 20.3688 9.67879 20.8017 9.42963 21.3259C9.2699 21.674 9.00953 21.9663 8.6821 22.1651C8.35467 22.3639 7.97519 22.46 7.59262 22.441C7.32252 22.4485 7.05382 22.3995 6.80377 22.2971C6.55372 22.1946 6.32785 22.0411 6.14064 21.8462C5.95342 21.6514 5.80901 21.4195 5.71666 21.1656C5.62431 20.9117 5.58606 20.6412 5.60438 20.3716C5.61512 19.4855 5.8384 18.6149 6.25544 17.833C6.67247 17.0511 7.2711 16.3807 8.001 15.8781C12.0476 13.0992 18.7879 8.38162 18.7879 8.38162C18.9698 8.25441 19.1183 8.08504 19.2205 7.88797C19.3228 7.6909 19.3758 7.47201 19.375 7.25V3.60212L20.8036 4.03937L22.1786 8.98937C22.2388 9.20678 22.3516 9.40603 22.507 9.56957C22.6623 9.73311 22.8556 9.8559 23.0696 9.92713L24.7581 10.4895C26.9786 11.2302 29.0259 12.4132 30.7765 13.967C32.5271 15.5208 33.9447 17.4133 34.9437 19.5301C35.9427 21.647 36.5023 23.9443 36.5889 26.2834C36.6755 28.6226 36.2872 30.955 35.4474 33.1399L33.5375 38.105C31.2 44.2004 34.654 48.83 34.8946 49.6069C35.5707 50.9708 35.9071 52.478 35.875 54H7V49.2769ZM45.5 63.625H2.875V58.125C2.875 57.7603 3.01987 57.4106 3.27773 57.1527C3.53559 56.8949 3.88533 56.75 4.25 56.75H44.125C44.4897 56.75 44.8394 56.8949 45.0973 57.1527C45.3551 57.4106 45.5 57.7603 45.5 58.125V63.625Z" fill="#0074D4"/>
                                    </svg>
                                          
                            </div>
                            <div class="promoution-delivery-img-background">
                                <svg width="49" height="70" viewBox="0 0 49 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M44.75 57.25H43.9717L42.022 28.65L45.9875 20.7396C46.0803 20.5481 46.1273 20.3378 46.125 20.125V2.25C46.125 1.88533 45.9801 1.53559 45.7223 1.27773C45.4644 1.01987 45.1147 0.875 44.75 0.875H35.125C34.7603 0.875 34.4106 1.01987 34.1527 1.27773C33.8949 1.53559 33.75 1.88533 33.75 2.25V7.75H31V2.25C31 1.88533 30.8551 1.53559 30.5973 1.27773C30.3394 1.01987 29.9897 0.875 29.625 0.875H20C19.6353 0.875 19.2856 1.01987 19.0277 1.27773C18.7699 1.53559 18.625 1.88533 18.625 2.25V7.75H15.875V2.25C15.875 1.88533 15.7301 1.53559 15.4723 1.27773C15.2144 1.01987 14.8647 0.875 14.5 0.875H4.875C4.51033 0.875 4.16059 1.01987 3.90273 1.27773C3.64486 1.53559 3.5 1.88533 3.5 2.25V20.125C3.4998 20.3383 3.54923 20.5487 3.64437 20.7396L7.603 28.65L5.65325 57.25H4.875C3.78098 57.25 2.73177 57.6846 1.95818 58.4582C1.1846 59.2318 0.75 60.281 0.75 61.375V68.25C0.75 68.6147 0.894865 68.9644 1.15273 69.2223C1.41059 69.4801 1.76033 69.625 2.125 69.625H47.5C47.8647 69.625 48.2144 69.4801 48.4723 69.2223C48.7301 68.9644 48.875 68.6147 48.875 68.25V61.375C48.875 60.281 48.4404 59.2318 47.6668 58.4582C46.8932 57.6846 45.844 57.25 44.75 57.25ZM43.2127 20.125L39.7752 27H9.84975L6.41225 20.125H43.2127ZM46.125 66.875H3.5V61.375C3.5 61.0103 3.64486 60.6606 3.90273 60.4027C4.16059 60.1449 4.51033 60 4.875 60H44.75C45.1147 60 45.4644 60.1449 45.7223 60.4027C45.9801 60.6606 46.125 61.0103 46.125 61.375V66.875Z" fill="url(#paint0_linear_68_315)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_68_315" x1="24.8125" y1="0.875" x2="24.8125" y2="69.625" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#EEF2F5"/>
                                    <stop offset="1" stop-color="#FAFBFC"/>
                                    </linearGradient>
                                    </defs>
                                    </svg>                                                                         
                            </div>                
                        </div>
                        <div class="promoution-delivery-text">
                        <p ><b>Индивидуальные скидки</b> при заказе от 3 шт.</p>
                        </div>
                        <div class="promoution-delivery-text-support">
                            <a class="promoution-link" href="#">Смотреть условия</a>
                        </div>
                    </div>

                    <div class="promoution-delivery">

                        <div class="promoution-delivery-img">
                            <div class="promoution-delivery-img-basic">
                                <svg width="67" height="70" viewBox="0 0 67 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M65.4571 31.776C66.2641 29.2947 66.2679 26.6222 65.4682 24.1386C64.6684 21.6551 63.1057 19.487 61.0025 17.9429C59.3669 16.7469 58.1538 15.062 57.5384 13.1315C56.7539 10.653 55.2008 8.48848 53.1041 6.95149C51.0074 5.41451 48.4759 4.58481 45.8762 4.58254C43.8589 4.58589 41.8937 3.94167 40.2699 2.74468C38.1822 1.20512 35.6564 0.374512 33.0624 0.374512C30.4684 0.374512 27.9425 1.20512 25.8548 2.74468C24.231 3.94167 22.2659 4.58589 20.2486 4.58254C17.6489 4.58481 15.1173 5.41451 13.0206 6.95149C10.9239 8.48848 9.37086 10.653 8.58635 13.1315C7.9709 15.062 6.75782 16.7469 5.12227 17.9429C3.01905 19.487 1.45638 21.6551 0.656595 24.1386C-0.143186 26.6222 -0.139329 29.2947 0.667617 31.776C1.2943 33.7088 1.2943 35.7903 0.667617 37.7232C-0.139329 40.2044 -0.143186 42.8769 0.656595 45.3605C1.45638 47.8441 3.01905 50.0121 5.12227 51.5562C6.75782 52.7523 7.9709 54.4372 8.58635 56.3677C9.37086 58.8462 10.9239 61.0107 13.0206 62.5476C15.1173 64.0846 17.6489 64.9143 20.2486 64.9166C22.2659 64.9133 24.231 65.5575 25.8548 66.7545C27.9425 68.294 30.4684 69.1246 33.0624 69.1246C35.6564 69.1246 38.1822 68.294 40.2699 66.7545C41.8937 65.5575 43.8589 64.9133 45.8762 64.9166C48.4759 64.9143 51.0074 64.0846 53.1041 62.5476C55.2008 61.0107 56.7539 58.8462 57.5384 56.3677C58.1538 54.4372 59.3669 52.7523 61.0025 51.5562C63.1057 50.0121 64.6684 47.8441 65.4681 45.3605C66.2679 42.877 66.2641 40.2045 65.4571 37.7232C64.8304 35.7903 64.8304 33.7089 65.4571 31.776ZM62.8653 38.573C63.4929 40.5028 63.4959 42.5814 62.8739 44.513C62.2518 46.4446 61.0364 48.1308 59.4005 49.3316C57.2979 50.8697 55.7382 53.0359 54.9465 55.5178C54.3364 57.4455 53.1285 59.1289 51.4978 60.3244C49.867 61.5198 47.8982 62.1652 45.8762 62.1671C43.2824 62.1626 40.7558 62.9908 38.668 64.5299C37.0443 65.7273 35.0799 66.3734 33.0624 66.3734C31.0449 66.3734 29.0804 65.7273 27.4568 64.5299C25.369 62.9908 22.8423 62.1626 20.2486 62.1671C18.2266 62.1652 16.2577 61.5198 14.627 60.3244C12.9963 59.1289 11.7884 57.4455 11.1783 55.5178C10.3866 53.0359 8.82689 50.8697 6.72427 49.3316C5.0884 48.1308 3.87295 46.4446 3.25089 44.513C2.62883 42.5814 2.63185 40.5028 3.25952 38.573C4.0645 36.0876 4.0645 33.4116 3.25952 30.9262C2.63185 28.9964 2.62882 26.9178 3.25088 24.9862C3.87294 23.0546 5.08838 21.3684 6.72424 20.1675C8.82687 18.6295 10.3865 16.4633 11.1782 13.9814C11.7884 12.0537 12.9963 10.3702 14.627 9.17476C16.2577 7.97931 18.2266 7.33393 20.2486 7.33207C22.8423 7.33658 25.369 6.50836 27.4568 4.9693C29.0803 3.77161 31.0448 3.12541 33.0624 3.12541C35.0799 3.12541 37.0444 3.77161 38.668 4.9693C40.7557 6.50836 43.2824 7.33658 45.8762 7.33207C47.8981 7.33393 49.867 7.97932 51.4977 9.17477C53.1285 10.3702 54.3363 12.0537 54.9465 13.9814C55.7382 16.4633 57.2979 18.6295 59.4005 20.1675C61.0364 21.3684 62.2518 23.0546 62.8739 24.9862C63.4959 26.9178 63.4929 28.9964 62.8652 30.9262C62.0602 33.4116 62.0602 36.0876 62.8652 38.573H62.8653Z" fill="#0074D4"/>
                                    <path d="M26.0814 51.7053C26.2467 51.7751 26.4241 51.8114 26.6035 51.8122C26.7829 51.813 26.9607 51.7782 27.1266 51.7099C27.2924 51.6415 27.4431 51.541 27.5698 51.414C27.6966 51.287 27.7969 51.1362 27.865 50.9702L41.2024 18.905C41.3427 18.5696 41.3449 18.1923 41.2084 17.8553C41.072 17.5183 40.808 17.2488 40.4739 17.1054C40.3087 17.0354 40.1312 16.9989 39.9517 16.9981C39.7723 16.9972 39.5945 17.0319 39.4286 17.1003C39.2627 17.1687 39.112 17.2693 38.9852 17.3963C38.8585 17.5234 38.7583 17.6743 38.6903 17.8404L25.3529 49.9057C25.2126 50.2411 25.2104 50.6183 25.3469 50.9554C25.4833 51.2924 25.7473 51.5619 26.0814 51.7053Z" fill="#0074D4"/>
                                    <path d="M24.0562 32.0722C28.0572 32.0722 31.3117 28.3562 31.3117 23.7884C31.3117 19.2206 28.0572 15.5039 24.0562 15.5039C20.0553 15.5039 16.8008 19.2205 16.8008 23.7884C16.8008 28.3562 20.0553 32.0722 24.0562 32.0722ZM24.0562 18.2533C26.5543 18.2533 28.5867 20.7363 28.5867 23.7884C28.5867 26.8399 26.5543 29.3228 24.0562 29.3228C21.5581 29.3228 19.5257 26.8399 19.5257 23.7884C19.5257 20.7363 21.5581 18.2533 24.0562 18.2533Z" fill="#0074D4"/>
                                    <path d="M42.0689 37.4272C38.068 37.4272 34.8135 41.1432 34.8135 45.711C34.8135 50.2788 38.068 53.9955 42.0689 53.9955C46.0699 53.9955 49.3244 50.2789 49.3244 45.711C49.3244 41.1432 46.0699 37.4272 42.0689 37.4272ZM42.0689 51.2461C39.5708 51.2461 37.5384 48.7632 37.5384 45.711C37.5384 42.6596 39.5708 40.1767 42.0689 40.1767C44.567 40.1767 46.5994 42.6596 46.5994 45.711C46.5994 48.7632 44.567 51.2461 42.0689 51.2461Z" fill="#0074D4"/>
                                    <path d="M33.0625 8.63037C32.6999 8.63341 32.3531 8.77958 32.0978 9.03705C31.8425 9.29453 31.6992 9.64246 31.6992 10.0051C31.6992 10.3677 31.8425 10.7156 32.0978 10.9731C32.3531 11.2306 32.6999 11.3767 33.0625 11.3798C39.2308 11.4143 45.1336 13.8943 49.4758 18.2754C53.818 22.6566 56.2451 28.5813 56.2246 34.7498C56.223 34.9297 56.257 35.1082 56.3247 35.2749C56.3925 35.4417 56.4926 35.5933 56.6193 35.7211C56.7459 35.8489 56.8967 35.9504 57.0628 36.0196C57.2289 36.0889 57.4071 36.1245 57.587 36.1245C57.767 36.1245 57.9452 36.0889 58.1113 36.0196C58.2774 35.9504 58.4281 35.8489 58.5548 35.7211C58.6815 35.5933 58.7816 35.4417 58.8493 35.2749C58.9171 35.1082 58.9511 34.9297 58.9495 34.7498C58.9724 27.8557 56.2597 21.234 51.4067 16.3374C46.5536 11.4408 39.9565 8.66913 33.0625 8.63037Z" fill="#0074D4"/>
                                    <path d="M33.062 58.1198C26.8936 58.0852 20.9909 55.6053 16.6486 51.2241C12.3064 46.8429 9.87935 40.9182 9.89989 34.7498C9.90151 34.5698 9.86747 34.3913 9.79972 34.2246C9.73197 34.0579 9.63187 33.9062 9.50519 33.7784C9.37852 33.6506 9.22777 33.5491 9.06166 33.4799C8.89556 33.4107 8.71738 33.375 8.53742 33.375C8.35746 33.375 8.17928 33.4107 8.01318 33.4799C7.84707 33.5491 7.69633 33.6506 7.56965 33.7784C7.44297 33.9062 7.34287 34.0579 7.27512 34.2246C7.20738 34.3913 7.17333 34.5698 7.17495 34.7498C7.15211 41.6438 9.86476 48.2655 14.7178 53.1621C19.5709 58.0587 26.168 60.8304 33.062 60.8692C33.4246 60.8661 33.7713 60.72 34.0267 60.4625C34.282 60.205 34.4253 59.8571 34.4253 59.4945C34.4253 59.1318 34.282 58.7839 34.0267 58.5264C33.7713 58.269 33.4246 58.1228 33.062 58.1198Z" fill="#0074D4"/>
                                    </svg>                                    
                            </div>
                            <div class="promoution-delivery-img-background">
                                <svg width="42" height="54" viewBox="0 0 42 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40.4269 45.257C40.2511 45.3347 40.0611 45.3748 39.869 45.3748C39.6768 45.3748 39.4868 45.3347 39.311 45.257L33.6747 42.7547L28.0438 45.257C27.8679 45.3349 27.6776 45.3751 27.4852 45.375C27.2927 45.3748 27.1025 45.3344 26.9266 45.2563L21.3011 42.7547L15.6762 45.2563C15.5004 45.3346 15.3101 45.3751 15.1176 45.3751C14.9251 45.3751 14.7348 45.3346 14.559 45.2563L8.9328 42.7547L3.30591 45.2563C3.13011 45.3346 2.93979 45.3751 2.74732 45.3751C2.55485 45.3751 2.36453 45.3346 2.18873 45.2563L0.6875 44.5888V49.5001C0.688694 50.5938 1.12367 51.6423 1.897 52.4156C2.67033 53.1889 3.71885 53.6239 4.8125 53.6251H37.8125C38.9062 53.6239 39.9547 53.1889 40.728 52.4156C41.5013 51.6423 41.9363 50.5938 41.9375 49.5001V44.5863L40.4269 45.257Z" fill="url(#paint0_linear_68_322)"/>
                                    <path d="M40.21 13.1835L23.7107 1.39864C23.0112 0.898475 22.1729 0.629515 21.3129 0.629395C20.453 0.629274 19.6146 0.897997 18.915 1.39796L2.41498 13.1835L2.41431 13.1842C1.88076 13.5664 1.44586 14.0701 1.14559 14.6538C0.845317 15.2374 0.688292 15.8841 0.6875 16.5404V38.8297L2.74725 39.7456L8.37413 37.244C8.54994 37.1656 8.74026 37.1251 8.93273 37.1251C9.1252 37.1251 9.31552 37.1656 9.49132 37.244L15.1175 39.7456L20.7424 37.244C20.9182 37.1656 21.1085 37.1251 21.301 37.1251C21.4935 37.1251 21.6838 37.1656 21.8596 37.244L27.4852 39.7456L33.1161 37.2433C33.2919 37.1656 33.4821 37.1255 33.6743 37.1255C33.8666 37.1255 34.0567 37.1656 34.2326 37.2433L39.8689 39.7456L41.9374 38.827V16.5404C41.9366 15.8839 41.7795 15.2371 41.4791 14.6533C41.1787 14.0696 40.7437 13.5658 40.21 13.1835ZM21.3125 6.87514C22.2643 6.87514 23.1948 7.15739 23.9862 7.68619C24.7776 8.21499 25.3944 8.9666 25.7587 9.84597C26.1229 10.7253 26.2182 11.693 26.0325 12.6265C25.8468 13.56 25.3885 14.4175 24.7155 15.0906C24.0424 15.7636 23.1849 16.222 22.2514 16.4077C21.3178 16.5934 20.3502 16.4981 19.4708 16.1338C18.5915 15.7696 17.8399 15.1527 17.3111 14.3613C16.7822 13.5699 16.5 12.6395 16.5 11.6876C16.5015 10.4118 17.0091 9.18857 17.9113 8.28639C18.8134 7.3842 20.0366 6.87668 21.3125 6.87514ZM35.0625 33.0001H7.5625C7.19783 33.0001 6.84809 32.8553 6.59023 32.5974C6.33236 32.3395 6.1875 31.9898 6.1875 31.6251C6.1875 31.2605 6.33236 30.9107 6.59023 30.6529C6.84809 30.395 7.19783 30.2501 7.5625 30.2501H35.0625C35.4272 30.2501 35.7769 30.395 36.0348 30.6529C36.2926 30.9107 36.4375 31.2605 36.4375 31.6251C36.4375 31.9898 36.2926 32.3395 36.0348 32.5974C35.7769 32.8553 35.4272 33.0001 35.0625 33.0001ZM35.0625 24.7501H7.5625C7.19783 24.7501 6.84809 24.6053 6.59023 24.3474C6.33236 24.0895 6.1875 23.7398 6.1875 23.3751C6.1875 23.0105 6.33236 22.6607 6.59023 22.4029C6.84809 22.145 7.19783 22.0001 7.5625 22.0001H35.0625C35.4272 22.0001 35.7769 22.145 36.0348 22.4029C36.2926 22.6607 36.4375 23.0105 36.4375 23.3751C36.4375 23.7398 36.2926 24.0895 36.0348 24.3474C35.7769 24.6053 35.4272 24.7501 35.0625 24.7501Z" fill="url(#paint1_linear_68_322)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_68_322" x1="21.3125" y1="0.629395" x2="21.3125" y2="53.6251" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#EEF2F5"/>
                                    <stop offset="1" stop-color="#FAFBFC"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_68_322" x1="21.3125" y1="0.629395" x2="21.3125" y2="53.6251" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#EEF2F5"/>
                                    <stop offset="1" stop-color="#FAFBFC"/>
                                    </linearGradient>
                                    </defs>
                                    </svg>                                                                                                          
                            </div>                
                        </div>
                        <div class="promoution-delivery-text">
                        <p >Для юридических лиц действуют <b>особые условия</b></p>
                        </div>
                        <div class="promoution-delivery-text-support">
                            <a class="promoution-link" href="#">Узнать подробнее</a>
                        </div>
                    </div>
    `
    const wrap = document.querySelector('.promoution-wrap')
    wrap.innerHTML = elem
}

export {promoution}