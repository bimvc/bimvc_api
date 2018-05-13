module.exports = ({displayName, courseName, date, result}) => `
<html>
    <style>
        h2 {
            font-family: Verdana, Geneva, sans-serif;
            font-size: 18px;
            font-style: normal;
            font-variant: normal;
            font-weight: 500;
            line-height: 26.4px;
            margin: 10px 0;
        }
        p {
            font-family: Verdana, Geneva, sans-serif;
            font-size: 11px;
            font-style: normal;
            font-variant: normal;
            font-weight: 400;
            line-height: 16px;
        }
    </style>
    <body style="font-family: Verdana, Geneva, sans-serif; letter-spacing: normal; margin: 15px; border: 2px solid #505050;">
        <header
            style="
            height: 250px;
            background-size: 100%;
            background-repeat: no-repeat;
            background-image: url('https://firebasestorage.googleapis.com/v0/b/bimvc-3cac4.appspot.com/o/cert__header.jpg?alt=media&token=995597ba-8b49-4f92-ae3c-1f00ae84072f')"></header>
        <main style="margin: 10px; text-align: center;">
            <h2 style="color:#cccccc;">Настоящий сертификат подтверждает, что</h2>
            <h2 style="background-color: red; color: white; padding: 15px; max-width: 90%; margin: 0 auto; font-size: 26px;">${displayName}</h2>
            <h2 style="color:#cccccc;">успешно сдал экзамен по направлению:</h2>
            <h2 style="color:red; font-size: 26px; ">${courseName}</h2>
        </main>
        <footer>
            <table style="width: 100%; color: #cccccc; padding: 0 20px 10px 20px; text-transform: uppercase; margin-top: 40px; ">
                <tr>
                    <td>
                        <div>
                            <p>Дата сдачи: ${date}<br>Результат: ${result}%</p>
                            <p>ООО Высоцкий Консалтинг<br>Авторизованный учебный центр AUTODESK</p>
                        </div>
                    </td>
                    <td style="text-align: right;">
                        <div>
                            <p style="margin-bottom: 0; position: relative;">
                                Генеральный директор
                                <span style="display: inline-block; width: 100px;"></span>
                                <img style="display: inline-block; position: absolute; top: -58px; width: 100px; right: 97px;"
                                     src="https://firebasestorage.googleapis.com/v0/b/bimvc-3cac4.appspot.com/o/cert__sign.jpg?alt=media&token=0caedb38-c0b8-41ed-a891-9d49364d35bc">
                                Высоцкий А.Е.
                            </p>
                            <p style="color: red; text-align: right; margin-top: 5px;">WWW.BIM.VC</p>
                        </div>
                    </td>
                </tr>
            </table>
        </footer>
    </body>
</html>
`;