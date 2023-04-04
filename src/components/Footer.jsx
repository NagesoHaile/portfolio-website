import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-dark py-4'>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <p className="text-muted mb-0">&copy; 2023 Nageso Haile. All rights reserved.</p>
                </div>
                <div className="col-md-6 text-md-end">
                    <p className="mb-0">
                        <a href="#">Terms of use</a>
                        {" | "}
                        <a href="3">Privacy policy</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
