import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';

const {width, height} = Dimensions.get('screen');

const GUIDE_DATA = [
  {
    id: '1',
    name: 'Budget Travel',
    image: `https://cdn.dribbble.com/users/1712260/screenshots/5823675/comp_5.gif`,
  },
  {
    id: '2',
    name: 'First Time Aboard',
    image: `https://media.istockphoto.com/id/1208978470/vector/vector-cartoon-airport-landscape-airliner-on-runway.jpg?s=170667a&w=0&k=20&c=bH_-dWuNXecMxwrOAoIF_0h9TEo3wCMcSzed7IITIqg=`,
  },
  {
    id: '3',
    name: 'Safe Travel',
    image: `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBAPEBAVEBAVFRUVEBAQFQ8WEBUVFRcWFxUVFRUYHiggGBolHRUWITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHSUuLS0tLS0tLSstLS0rLS0tLS0tLS0tLS0vLS0tLS0tLS0rLS0tLS0rLS0tKy0tLS0tLf/AABEIAL4BCQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xABDEAACAQIEAwUFBQYEBAcAAAABAgADEQQSITEFQVETImFxkQYygaGxByNCUsEUcpLR4fBTYoLxM4OiwhUWJGNkc6P/xAAbAQACAwEBAQAAAAAAAAAAAAABAgADBAUGB//EADQRAAEDAgMFBwQBBAMAAAAAAAEAAhEDIQQSMUFRYYGhBRNxkbHB8BQiMtHxI1Ji4UJywv/aAAwDAQACEQMRAD8A7rLCiXNgNYaaFjYb8vHwHjEjEEEbg3nz0RtXoidybaPZCDY7yY4djqFyg3IBIGm/OCrTb3iNOq2I6co2WEmcHaooRHHLYW35n9AJHVcKMx28NSSdAAOZJ0hawuIaLk6c9OqBcAJOikhEVLh9V2+8VqdMdWXMx107p0At8/CStwhr2pPlUjVWBYg7Arf3b2OlvoSekOzHxdwDvMebSTPg0jQE6xm+rGxtvI+RjqQdwNpjhkQDK5pvYsuUhl0BGvLqLfTyEsxVaRpuLT827Y63GhAIIVzHh4kfPnC25KGcj7ZcWx2FxGC/Zsj0qzmkadQKM1XdEzn3S4uB4r4zd4Lxili0JS6VEOWtQqC1Wk3NWU/WWuwtQURW1ad2zx3fN4VYrtzmnt9fBaUMUMzq1KGY2N9pcLQrDD16hoOQCr1lZaLX6Vfd9TNuhSaoAyAup1DLqpHUHYy7ualvtN+E+WwpM7d6ZDLIwNTmAvmVlbGVsPQ1xGLo0eud0H1tL2YHEO0YeYj1hVur0xqQlDMs+1fChtje21t/6enVqj/8w006eOwlRQ1LEAde2D0zbydQZoHZWKicvUfuEn1VKdUYogQdQwYcmUgqR1B5iCqmZWXa4IuN9Zhyw6HW38FdNpCFCjVqo1Smyhb2pggntCN2JuLLfQW87xiO4YK6FCRmFypuNL7HcXHrNLhuNDfdHKtRQAEUmzKALOAQO7ra2ttd5Tx+JWpVpdm2fL2naHKwAvYDvHndbW1+U9BiMHR7lxa2zRIcPCRcWdmjaDrbKuYyu/MJNyYI53sdMvDqlBDFPOrqIRQwSKJQQxSQihAY6NgRQihgkUVdabWzAE2O45fylvAYcHvt/pH6yoAbXANuZF7es1sKRlUDfIP6/SJRaCboVnENspUQD6k8z4mBlAN7cuXTp6x/Uxp3+Z/Qet/Sa4WNZ+KoqhvbQ8gbAH+UrUP+LQ7uazkkackfXXoSD8JocS2Uc7/pM7EUQR3WII1VxoVaxFxfwJ8wYMPUbRxLXu0HuCJ5TPhKucHVKJA1/RlbrPz3J0UfT6Xv0F+RjlGXTnzPU6cumwA8vOZFHipA71Oo1QKBopsW0zkMoy2PXT5mOTi5t95QcN0BUg72Fx8NwBq07tgbkTsvrxA1cOLQQARe8LJm4Hy04HceB9kOMBe0o2H3hzXI97swDfMeYzEWHX4yMRjPUqP2tS2fLlCjZAbFhfmbjfw2kk43aNVlSqAwyGiJ2G5NuF/1YgrXhmlrSSIkz84rlPtGDvg3RFUsMtRWLlKqMjZkekMpDkEai4Nj4yjQ9p+H49aWLDvgeJogDVGUClVYABkqWvnp3HMBgPK07YvK9emr+8it+8AfrNGD7Sbh6fdmnI2/drNtCCIi0JK+ENV05unvIWBh/tEw+WzYGs9UaHJUw/YnxVmqA28xG4v7RynuYTDUh/8AIxILeiIw+c1X4Th23w9I+dOn/KSYfhtJPco00/cRF+glre08Kz8KAB8R+pS/R1TrU+ea4ni+P/8AFiv7U9JEQfd1cLg8XUqKNCVFQMVYG2oK28pwvB+IY/BVD2FSrSCg1KlJGdUamD3nZDcBdD3iOU96FEykvAkGLONBZahpdk6gjs3AbMrMLasNgektb24b/wBOOc+dv43JTgRaHdFx/wD5tw2ORafYUFNTuKcVialRsxNh3Fu9ybAXsJcwnsW4N+1oUv8A6MKgb+NmN/SdkMEmbPkXN+bKM3rvJxSlFftis+O6+zyPqP5TU8FTH5X6e65mj7HUz/xMVian+XPSRfhkQH5y7wf2Zw1JQWoBqis1nrMarEBjlfvEgXFjpa3hN4LHTG/GV3iHPJHiVcKNMaNCQiihmdWKKrRVrZhe2o6g7aHlA1qfZoE3HdVbaKthtyGokl7SnUVrhi9za19jbe1xC57sobcgaCbAnbBMc/PioYJkRPUq6cVTQMShbLuSdJlYz2jqBzTp00SxAF9Tc7X5c+krsrZShuVJvYknnfe95FiKYs1TKO03uc2420lQxVRphoPkP0nGHB1vzTML7W1c16ihwdwLC37pH6zp8PXpMvaKllaxLWAuTYX03O04+1AKfutgfkI/hVZlwlDVmYJTZr797Vj0/EZPrHHYdYi3z+UX4QbLLrmNI3s1rb3vaRU2DjMjBx1U/UcpzzYwZGQNa4tfW4mZUfIRlbU+6VNjp48pBXDtnt+wiKDwu0inO8O4wwv2rkqLe8Lsf9XIeJ9DOijAyoWkapsEfBCgoEBOgufASxhq2XumwI2J28QennKwMdTUHc2Hz+EqaSDZM8SL6LVNUab2vvy08YDVAXMdL62O/laZufXS6joCYqm5sbi+hlve2VHcjROrVc7XO3Tnb+ca62OhuORidrm9rdfPnBKjdXAQEo6COgsEUoI6OzC1rWPM/wB7RwAdqUlQlIsgkkZUvlOX3rG2bbNbS8ETZSYQwuAeuA7DJSK3SzHM99iQLFRbXfmI1qVWkyK4BViVRwbsbXKlhbmB6+emnw3GUezRM5GRQuWr3X7osQb2BtztpK/F8VTqNTRDndGDll9xVykG52NwdAOdjPVV8JSFNzAIa0GNbaidd5ubyQ0H8QFyGVnEhxNzE6cLeXvtJKjtHlRYG9z0tt1jIp5gHgusQjFFDIgiIooYyiEKqToBc+EQbS1h5xRoFkqDqRof0kNRLyeK0B4IiyoNh4w4eaVoMskJs5XP8cpFcNXa2opvbzKkD5mWEwtlCW0AAty0kntCPuQv56tBPg1amD8rzRKSFoj5wT95ZZQwKHdB8NPpHLwije+U+VzaaWSELBlG5TvHb1Qbg9Ai2U/xN/OXkUAADYCwjooIA0Skk6oQR0bIooYrQ2htKYToQxREgbm0IuYGqBSmZxXjVOj3QytU/IWGniQNZncewbuzH9rqZGtlo09ALb3ZLH1mVS9n6Z96mah61Hapf4O3hPRdn9kU3gVahkf2wQOZME8QLcSuZica5v2ttxkH0+cFaf2nqH8aJ1zJVA+DEG8tcJ40mJqLT/baYdiQEpl2a4BOwAG3UyPCezJJAWgq+KoAB8VYXm9gOE06VgvvWPeYgNc3tZczEDQ/hv49O33FGn+DGjwAWIPe/Vx81bzZbKQfM218dND8NPGSSulRlJU3vzVhe/8Ap1JPnA/FKCkpUJovbusyk09uZH62nIx/Zban30QA7bsB9gfIc7rZQxJb9r9PnNWopW4atdw5ZaboCOzqYd8ysDf8O4I09ZMTbTnOBiMPUoOy1B+vP22bVvpva8S1KoisLMoYdGAI9DFTRVFlUKOihQPlDeK8QPdlyzbWNk7/AB4psomdqdFBeV+JY1MPRqV6hsiKWPw5DxO0AuirN5FWxaILswA/vlznjntF9oWJqlqdGogp6XNIMDruue9/C4tOMxOOrV3ZlpnqVpBrL6bTqUuy6jxLiB85Kh1dgsLr6GT2jw5fJcjWxYgBQehN9Nx6iatOoG1BBHUT5gatUYANUYgEkBidzp8dp2nsNxVqPasKwFgMtM1CoY2/ILhr+Uav2aabM2aVGVmvMAL2+CUeEcSTE0lqoCt/eVrZlNgbG2nOWKuJVbZnCk7XOvwG5+E57KbnnK0EncAT6J3ODRLrKxFKueo/uqEX/wBwEufJAR8z8Iuwb/Ge/wC7R/lf5y00QLOe0Hdc9Whw5TI2gFV95OjSfIepB6QrUUrqtYbZH8NUa3n3r/KEPV54ep5pkI+Rv8oRhnu/Ag+BA6GHdFDVA/IEcj6iR1VLi5u+DT82IBP/AC6dR/qomlMXHPUbGYOmKTKQmIqjtGVFIUU6d73P+L0mrlqc2pg9FWpU+ZyR3YV4AzlrfFw37gSTyCnfA6AnwBUkEb2bf4qn/lMPn2hgtU/Civ4I+v8AC4X5Xg+lcfwc0+DgOjsp8lO+A/IEcifSU+KRLUNyGpsviSnpoxPyksyvblMGORB6gkK5rpuEo2KGKmUcRhgcgAkmwG5OiiVoys/jPD1xNI02ZkO6uhIZTyOm48DPO8TSxGHqGjWZg26sGbK69VP92npmZmBKU3dRuwACerEXHiNJmcWwdOunZ1Uca3RwMxRuTKVvb47zv9nYnE4M925pLDfLIzDiGTm8RHGxXOxVGjXGYGDv2HgTouLStU/xG/iaPw+KxC7VBa/+fr+9Jq3DKyG2Ut0dVbKw6+Hly+cr52BykG/Tn6T1LP6gzMuPnMeBvsN1xnEMMOt4/PRddgeN1lRMrm4vox020v1HWdZw7H06/v3VyBezuEP+m9vlPL8FiWY2WlUcjcIjsfRQZu4OvilIH7HibcvuK2/mVtK30iLGAeJA6Egq5tUHSSOAJ6gQu1qYR9bUrjWwBp2sNtAATfz5SkcJcAmgyaC4CMTy0uPP5GP4ZxWqDlqUXQc85RSPgWvNHE8YpotyVB6O5C/xAGZHPY1waXAE/wCQ/fotIkiQD5FYXDOG9iKgylbu7ocrggE33t+sOFFQUafaavrnPduWJJJJHXWX39o+i0z0+8xFvUUZVr41q471emiA3tSUuwO1jqT15CUdo0S/DuZMTEam4IN8oMDieUp8PVAqAgT82SRPJC8QeVmWkbhqlV/gFXw7t1PrcSOnWJ3BHmV+VjPJ18P3Ns7SdsFtuuYnf9ojjquvTfn/AOJHiD/HU8lcqV1UFmIAG5O08m+032iWupoI7HK4JpjSmFUaZxuzk62Owtpe82/tE9qFpUmwtJz27ZScm6AEMCTyJtpz5zhvZL2eOOrntGK4enrVdbhmdh7inrzJ8fGdHszBl0VXbNOW356a1YioGjKFlez3DFxDm9RVtqtJjZqpG6gjYT2PgmApJRQ0qWRSBoRZgeYPzjV+zmm1PNRyrquQsgNVAhv92bix8OfpIuP8cGBehSap2avtUZQ4J2745C/OdOuHOIBlLhy1oJt4/NFW9sfZHDVcPWxAp5aqqWuugPW42niyVXTvKdLz6LxeMU4aqK2VR2RLMpvTZGBGZTv8Dt4z54xCDvgarm7uh0AO/pLcOdQqsUBZwXpf2Z+1S0mNCs1kqMuV2IsrkZQD4Gyjz8562MVkIAVmc+7ZGb5gWv5z5m4RXtYkZkVgWTmVBGx859IcF4gtehTq02OV1HgbjQg+IIM5eNpMpVhUgwdYtfZrp8Ig6Mwl7I2q1mrEgvTsD+apTzjzW/0MlFIna38Sj6mMW3OO7vj8phfUpvvkjwcf/Wb5vTNa5urp5D2hOSqy3ANutrcoTiXP4z6mAZOY+f8AKE1V5L6xe8eBAcQN0lGBP4rECh+IsxN8mGVT1++qsd+v3M01w6n8LnzqV7/9JA+UlarrcADa+g5f7wmtfcehIj08Q+lOR0T88eqDqYd+TZROGbLdR3ujsRcedrg6f7c4Vp1b2ZFA5sKlIgfMH5SYVF/z+ojGrHkT8bGMa1Ij7qYJ3yR0EN8ggGPmzvT3k9U81nGge/kdPheRVS17te/jeE1W6+mkYTM76jnWkx4n3Kua2NiEUUUrToRFUurZAzD8Ti9jysDpp13ihjUqr6RzMMHeLHkUr2NeIcJCNV2bViT5yFi4IyAZjpdrZV8SOf8AeoksUDXw7Mb+M/sHqoW2gGEFGVsxd67696ozZBtso0Hnvt0jK9as5v2zqOi5Qb+NwfDlJIpodja7nSXcoEDgAZEbt2xIKDAIA/fmqdZazCzMKy/le4bz5i/wEjWgG0yVFHO9QhfRXP0l8xhk+vqxG3eC5vOGua2eOXxlA4dp/wBwfUE9U2ixQ3zu3g71GX0JhbEa5lVUPVUQH1teNYyFzKHY3EQR3jr/AOR+RwVrcPS/tHkEKtQkkkknmSbmU69jqbEj1HkeUlqvKNV5mY5zHZ2mDvFj5i61FoIykSE4PY3BPxZyPQmV+I8RFKmznlAxnA+2XGi5aiNKYuCbi5PMj6fGaaTKmKqAOJPEkm3P0SHLSbYQuYr4tsRi7kZzUrCyG9mzODlPMCxA8p7hwDhSUqqU6SLSolWYKoATPfW46/yngdLiBpV6FS3uVVqEjwIv8hPong+MuSrMQw1U929iLqbW1Fjb4GevogNhoGy3JcSvLpdu15rfwlfvGky5HGoB91h1Q8x4bj5zN9ofZ2liL1B3auRkJsCGDCxBB0/vrrLxzOLOocbhqdw4I2IB2PiD8JQ4xxVqaZRq+wc6C3NiOv8AOXVcoaXO0Cqo5s4a3b8vwXn/ALS1hg8EyVDmyKUUHmNLA+gnkOGclixOrHUa89zO6+0rEPUFNSAV390b73zCcDhyA3hbX4zHh2/aTtK24h33gbloYW21tungfnPePYMp+w0QrX/N4MQCRblvt4zw/DUjYAHrlJ257z272JZDhlKEnUhyfzLZbAcgAoHwnN7UP2jxV1AWK6SKNBhnGV0IxQQyShCUUUUikJRRQSIoxsUECKRgiivIinwQxSJUIoYpFEIooDAigYxjHmRtFKYJjmQOZK5laqZWVc1V6zSo8nqmQNInlQ1XCgsxAA1JOwnl/EyDVqOoz3qE01INnOn/AErYfECdl7UcTprTNMuuvvAavYEaAdfHlPOeM8VLVDk7gChQF5ADYEidns3DuMuG30+fJgrJiKgGqyOIqRUdW1a+tup5Ce8+09CqlPCYiijNUXLTbs75iCRyHLeeDYOt9/SOXNaohsedmBsfOfQXDvaPDjRqlj+YhrnXYaaCdqsHDLHTksuHbnzbdOO9HC4yumX9ow1QX911NBgbdb2Knw1nH/ah7Wdmq4ejTVWa+YsqMADa91tlJPjeehYzF0QADWS7+7mqZi3ko8954r9oWFPbOQc43DCxFjtr8YG1Xlwa42QfRYxpc0XWBxvjdXENlFR2pLbJ2gp9psPeK763lbhlHtGsdLnUjwG0pBDL2Dv2d194E7W/vpNJAa2GrM0kuly1mcAi3ug5fkT/AEnqH2W1CaNZQ2YZwbHcMRY/CwX0M8hoqQGvsMp63N7frPQ/srZhXqEkLTy2YE2u1xYgdf6zldos/ongtlB0uXq6tHSNY+efWko3igihQRigikURgiikRSigvFAohFBFeRFSxRRQpEoIopFEoDFAYCmTWMjYxzGROYhKdoTHMq1Wk1RpVqNEVoULmYftPjjRoEqMzEgBRz1uQfCwM2mmD7TYdCisVu17Lctbrte3ITThGB9ZrTvUIJsF5xiqVV2QtbvnTLYDN+U9P6TKxlDvlSpGXTLuSd9+mu86qqoFWmDsz3t0qKrd4eY+gmTi+9XcDViWsPIC09gGBosslagOvssnAYFywKgsQQxtyAI1naUcSma2YX8ZQ4dhDh8rt3w4Gdl1yH8unLxmsfeIuGUi6kj1Hj/WOAr8PR7tvFWVxbUmDoRmsRc6mxtt8vSYnGaTVLsxLcyZZrYgA68oqwJp5T776AdB1+EOUTMXV7g10yuKq0NL/hBOvM3/ANo5LBCALDruSevpN/jnCClJTTvpYEEnnpMarTqJamQF2vprrbQmI5cmtRLHRCZgqhvlOovc+U7r2Aoipi2pE90qQ66ZiLEgqegtuNdZxlKh7yqbqouT4X/2nf8A2cUM2JVwB3A6sdMxLgEAeCgHX/MOswY4gUnHgmoN+5eqiG8aIp5haU+8UZFDKifFG3ivDKMJ0EbeC8kqIwXhjCYqICdeC8F4LwSjCsRQRSxVpRRRXgUSJjCYiY1jFJTAJrGQuY9jIKjRCVa0KGq0rMZJUMhYwpk1jMH2kqe4vS5P0H0M22acTxTiIq1SF7xvYAbKOrHlpedLsuiX1s2xvqZATNKxuK11XIxNiHB/Q/ImR8L4YuZqtTVzldL3sFYc+pvv5TQTCICHbvuL2J2F+i/rJL8vw8vD4z1IEoZJdmcnLTCscgtpcqNj8Ib5QbgKtr6f34RK+mW+o5nfwEqcUqlrUl3bVvBYytkASqOGPaPmO19Js4ZLku3kvlKGDpgbbbCalFpElMb1P2eYHMLg6WMwOOUSzCgFCLa4bncEbDwuJ0IEw/aAOuVgbg2W35WJADD4EgwO0RrD7Cub4hS7NUUc7E9bagXno3sTTNPsQAQ2dT42JysPKx+Q6TiDh+0qrfW2XIfC9vTQ+s73hGJNOqrDUi5A6+EyYmnnpPA3GFmo0rvPIfOS9FijQYrzx6iMV4LxXklSEbxXjYSYJUSvFeNvBeSUYT7xRl4rySojBBeK8WUVavBeMvFeWyq4TrwExt40mCUYRJjGaAtI2aISnDUnaV6jRzvK9R5AnTHaQsY5mkbNCosb2qxppYdsurOQi26ne/hYGcnTGUZd/wAx6nmZ2XG8OKlFwd1GZfMA/pecRnnpexi3uSBrN/IR0soFNmjy2lpXzyti8aEGnvn3fDxM7GiYuAElWnxADqg5e958hEyWBP4mOp/SZfDwS1zrNKo2siDXSJKfT00lyjM+k1zeXaRhTtKuK0o8bp5qL+Av6G5lpWlbihPZVLb5G+hkTOu0rPwCg2YcrAeQnS8Kb72keWZfQzjuD1+4t+gnT8Oq2ZD0IMRzZaQkpGQvVCY2DNFeeBBsqYRvFeNvFeFGE68N5HeK8ikJxMF428V4EYTs0F40wQIwn3gvG3gvDKkK1eNJjM0aWjSlhSFowtGFo0tBKMJ7NIXaBnkTtIim1HkDNC7SFmjIJM0iZo12kLPConubgg7Ti+JcMek9lUuh1QqCfgbc51zPImea8JjH4ZxLRIOo9FFzWB4O7nNVBRen4j8OQmDxDC3Yn+9J37POOqnVuXfbfzM7OAxdTEvdn0tAGg1QcJEFQ4anlENRomeMLXnYR0sFNQ2luk0po0sUWhCdpVkPrBiDdWHhKz1O8slqnSRPK5ThTH3b2G2Y7eE6bD1zfr5bTkabEMaYGoY2877+k6bBaWEDVkwzrQvXuE1WahSZ/eKi/ly+VpbvMvgDk4akSb6EfAEgD5TQzTweIEVnjifUq8i6feC8YWizSlBPvBeR5os0MKKS8GaR5os0KifmizSPNBmkUUt4M0hzRZoIUUxeAvKxeNLxksq0XkZeQF40vIpKlZ5C7xjPIWeGFJTmaRM8YzSF3jIJ7vK7vA7ys7xgJUKlapI2qSEvI2eWBiEqdqk4/EVbsT1JPqbzpK9Tut5H6Ti+0I0nb7Ipxmd4e6GZWM948GVUeSKZ2woHKwHlii8oAyxTfSFOCn1n76y0zaTMZrmWQ+lzCma5YGLQDEkbXIM3MK20yOK6VqLcyCD8LfzM0cM0ACz0rOcOK9U9l618KngWHzv+s1M8532SqH9mH7zf9s2c88RjhGJqf9j6rQdVYzxZ5VzwF5lUVrPBnlbPBnhQVnPBnlbPBmkUVnPBnlfNDmkUU+eLPK2aLNAov//Z`,
  },
];

const ARTICLE_DATA =[
  {
    id: '1',
    name: 'Budget Travel',
    image : `https://imageio.forbes.com/specials-images/imageserve/62f2863deb9b0c0cd1fe6374/fall-travel-cheaper/0x0.jpg?format=jpg&width=960`,
    headLine : `How to have an amazing holiday while traveling on a budget.`
  },
  {
    id: '2',
    name: 'First Time Aboard',
    image: `https://www.tataaig.com/s3/medium_senior-citizens-travel-insurance_cd09659466.jpeg`,
    headLine : `Air travel with a baby will never be a nightmare again with these tips.`
  },
  {
    id: '3',
    name: 'Safe Travel',
    image: `https://chopra.brightspotcdn.com/dims4/default/5a343c1/2147483647/strip/true/crop/533x300+55+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Fchopra-brightspot.s3.amazonaws.com%2F61%2Fcc%2F9b0ff8c8aaba0ff21eafee50293c%2F6reasonswhytravelingisgoodforyou.jpg`,
    headLine : `A practical guide on how to pack lightly for a long trip.`
  },

]

const GuideScreen = () => {
  return (
    <View style={[GlobalStyles.screen]}>
      <ScrollView>
        <Text style={styles.screenTitle}>Guide</Text>
        <View style={[styles.HeaderRow]}>
          <Text style={styles.TextM}>MIGHT NEED THESE</Text>
          <Pressable>
            <Text style={[styles.LinkText]}>See More</Text>
          </Pressable>
        </View>
        <View style={styles.container}>
          <FlatList
            data={GUIDE_DATA}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => {
              return (
                <Pressable style={[styles.tipCard]} onPress={() => {}}>
                  <ImageBackground
                    source={{uri: item.image}}
                    style={[styles.tipCardImgBackground]}>
                    <View style={[styles.tipCardBody]}>
                      <Text style={[styles.tipName]}>{item.name}</Text>
                    </View>
                  </ImageBackground>
                </Pressable>
              );
            }}
          />
        </View>
        <View style={[styles.searchBarContainer]}>
          <TextInput
            style={[styles.searchInput]}
            placeholder={`A country, city , place or anything .. `}
          />
          <Image source={GlobalImages.searchIcon1} />
        </View>
        <View style={[styles.HeaderRow]}>
          <Text style={styles.TextM}>TOP PICKED ARTICLES</Text>
          <Pressable>
            <Text style={[styles.LinkText]}>See More</Text>
          </Pressable>
        </View>
        <View style={styles.container2}>
          <FlatList
            data={ARTICLE_DATA}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({item}) => {
              return (
                <Pressable style={[styles.articleCard]} onPress={() => {}}>
                  <View style={[styles.articleImageContainer]}>
                    <Image
                      source={{uri: item.image}}
                      style={[
                        GlobalStyles.imageFull,
                        {borderRadius: 20, overflow: 'hidden'},
                      ]}
                    />
                  </View>
                  <Text style={[styles.articleCardTag]}>EXPERIENCE</Text>
                  <Text style={[styles.articleHeadLine]}>
                  {item.headLine}
                  </Text>
                </Pressable>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default GuideScreen;

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 22,
    marginHorizontal: 20,
    color: GlobalColors.darkColor2,
  },
  TextM: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalColors.darkColor2,
  },
  HeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 22,
  },
  LinkText: {
    color: GlobalColors.primaryColor,
    fontSize: 18,
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 22,
  },
  container2 :{
    marginHorizontal: 20,
    marginVertical: 22,
    paddingBottom : 100,
  },
  tipCard: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 20,
  },
  tipCardImgBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    // opacity : 0.8,
  },
  tipCardBody: {
    alignItems: 'center',
  },
  tipName: {
    color: GlobalColors.lightColor1,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  tipLocation: {
    color: GlobalColors.lightColor1,
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    borderColor: GlobalColors.greyShade2,
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchInput: {
    width: '90%',
    color: GlobalColors.greyShade1,
    fontSize: 16,
  },

  articleCard: {
    marginRight: 20,
    width: width - 50,
  },
  articleImageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  articleCardTag: {
    width: '80%',
    color: '#0048F0',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  articleHeadLine: {
    width: '80%',
    color: GlobalColors.darkColor2,
    fontSize: 15,
  },
});
