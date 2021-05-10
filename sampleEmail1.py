import smtplib
from typing import List

SMTP_HOST = "smtp.gmail.com"
SMTP_PORT = 587



def send_email(from_addr: str, to_addr: List[str], subject: str) -> None:
    msg = f"From: {from_addr}\r\nTo: {','.join(to_addr)}\r\nSubject: {subject}\r\n"

    with smtplib.SMTP(host=SMTP_HOST, port=SMTP_PORT) as server:
        server.starttls()
        server.login("sowmya1552@gmail.com", "dzorlhagwiseusud")
        server.sendmail(from_addr, to_addr, msg)

if __name__ == '__main__':  
    send_email("sowmya1552@gmail.com",['sowmya1552@gmail.com'],"tetse")